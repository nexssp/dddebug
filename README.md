# @nexssp/dddebug

Just simply debug function. no console.log/process.exit -> just ddd with nice debug output and time executed. Time is calculated from `require("@nexssp/dddebug");` so put this at the top of the program. after `ddd` program will stop.

![image](https://user-images.githubusercontent.com/8799218/116687432-76120800-a9b5-11eb-9c0d-f433ada26333.png)

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
