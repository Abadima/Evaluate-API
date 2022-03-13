var argv = require("process");
var isBuffer = require("is-buffer");
var { inspect } = require("util");

if (isBuffer(process.argv[2])) {
  console.error("No Thanks, we value our system <3");
}; if (process.argv[2].includes("fs.renameSync(")) {
  console.error("No thanks, we value our system <3")
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
