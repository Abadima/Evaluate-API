var argv = require("process");
var isBuffer = require("is-buffer");
var { inspect } = require("util");

const NoNoWords = ["buffer", "exec(", "process"];

if (NoNoWords.some(word => process.argv[2].toString().includes(word))) {
  console.error("No Thanks, we value our system <3");
}

if (isBuffer(process.argv[2])) {
  console.error("No Thanks, we value our system <3");
}

try {
  var evaled = eval(process.argv[2]);
  const res =
    typeof evaled === "string" ? evaled : inspect(evaled, {
      depth: 0
    });
  console.log(res);
} catch (error) {
  if (error.toString() === "ReferenceError: evaled is not defined") {
    try {
      let results = eval(process.argv[2]);
      console.log(results);
    } catch (error) {
      console.error(error);
    }
  } else {
    console.error(error);
  }
}
