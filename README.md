# @nexssp/dddebug

Just simply debug function. no console.log/process.exit -> just ddd with nice debug output and time executed. Time is calculated from `require("@nexssp/dddebug");` so put this at the top of the program. after `ddd` program will stop.

## Installation

```sh
npm i @nexssp/dddebug
```

## Usage

```js
const { ddd } = require("@nexssp/dddebug");

ddd(myvar);
// Multiple vars debuging
ddd(varToDebug, anothervar, myobject, myArray);

// OR

const d = require("@nexssp/stack").ddd;

const myObject = {'test', {"x":["y"]}};

d(myObject);
```
