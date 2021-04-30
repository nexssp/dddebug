const { bold, green, yellow } = require("@nexssp/ansi");
// Time is calculated from require("@nexssp/dddebug"); so put this at the top of the program
// const startTimeSymbol = Symbol("nexss:startTime");
const startTimeHR = process.hrtime();

const ddd = (...args) => {
  args.map((e) => {
    process.stdout.write(yellow(bold(require("util").inspect(e) + "\n")));
  });

  console.log(yellow(`Stopped by ddd Function at:`));
  const getCallerFile = require("get-caller-file");
  console.log(bold(getCallerFile()));
  const timeDiff = process.hrtime(startTimeHR);
  console.log(
    bold("exec time: " + green(`${timeDiff[0]}s ${timeDiff[1] / 1000000}ms`))
  );
  console.log(bold("cwd: ", green(bold(process.cwd()))));
  process.exit(0);
};

module.exports = { ddd };
