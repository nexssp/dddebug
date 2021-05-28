const { bold, green, yellow, red, cyanBG } = require('@nexssp/ansi')
// Time is calculated from require("@nexssp/dddebug"); so put this at the top of the program
const startTimeHR = process.hrtime()

const d =
  (stop) =>
  (...args) => {
    args.map((e) => {
      process.stdout.write(yellow(bold(require('util').inspect(e, { depth: 5 }) + '\n')))
    })

    const callerDetails = _getCallerDetails()
    const filename = callerDetails.filepath.split(/[\\\//]/g).pop()

    const location = `${bold(cyanBG(` ${filename} `))} ${bold(red(callerDetails.line))}:${
      callerDetails.column
    }`

    if (stop) {
      console.log(yellow(`Stopped by ddd Function at: `), location)
    } else {
      console.log(green(`Continuing ddc Function at: `), location)
    }

    console.log(`filepath: ${callerDetails.filepath}`)
    console.log(`function: ${callerDetails.function}`)
    const timeDiff = process.hrtime(startTimeHR)
    console.log('exec time: ' + green(`${timeDiff[0]}s ${timeDiff[1] / 1000000}ms`))
    console.log('cwd: ' + green(bold(process.cwd())))
    if (stop) process.exit(0)
  }

// Below function _getCallerDetails BASED ON: https://stackoverflow.com/questions/16697791/nodejs-get-filename-of-caller-function
// AND: // BASED ON: https://stackoverflow.com/questions/28631260/how-to-get-filename-and-line-number-of-where-a-function-is-called-in-node/47105238
// Re-written by Marcin Polak / nexss.com
function _getCallerDetails() {
  var originalFunc = Error.prepareStackTrace

  var callerfile
  var line
  try {
    var err = new Error()
    var currentfile

    Error.prepareStackTrace = function (err, stack) {
      return stack
    }
    let shifted = err.stack.shift()
    currentfile = shifted.getFileName()

    while (err.stack.length) {
      shifted = err.stack.shift()
      callerfile = shifted.getFileName()

      if (currentfile !== callerfile) break
    }

    const trackedLine = shifted.toString()
    const regex = /^(.*) \((.*):(\d+):(\d+)\)$/
    //
    const match = regex.exec(trackedLine)
    line = {
      function: match[1] === 'Object.<anonymous>' ? 'none/root' : match[1],
      filepath: match[2],
      line: match[3],
      column: match[4],
    }
  } catch (e) {}

  Error.prepareStackTrace = originalFunc

  return line
}

const ddc = d(false)
const ddd = d(true)

module.exports = { ddd, ddc }
