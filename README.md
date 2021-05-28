# @nexssp/dddebug

- EASY Debugging with useful information

Just simply debug function. **no console.log/process.exit** -> just **ddd** with nice debug output and time executed.

- It shows where stopped with: debugged value (object, array, ...), mulitple values,
- **line number**
- **filename**
- **filepath**
- **exec time**
- **current working dir** (cwd)

![image](https://user-images.githubusercontent.com/53263666/119945494-d173ed80-bf95-11eb-811c-2c425d11a0f6.png)

## Installation

```sh
npm i @nexssp/dddebug
```

## Usage

```js
const { ddd, ddc } = require('@nexssp/dddebug')

ddc({ x: 1 }, ['another', 'var'], 'something else') // will not stop here. ddd will stop
```

Above will display but program will continue:

![dddebug function - continue example display](https://user-images.githubusercontent.com/53263666/119947005-8955ca80-bf97-11eb-886d-4e7f3f57eb5f.png)

```js
ddd(varToDebug, anothervar, myobject, myArray);

// OR

const d = require("@nexssp/dddebug").ddd;

const myObject = {'test', {"x":["y"]}};

d(myObject);
```

## Note

Time is calculated from `require("@nexssp/dddebug");` so put this at the top of the program. after `ddd` program will stop, and `ddc` will continue.
