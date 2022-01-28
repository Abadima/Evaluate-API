const { inspect } = require('util');
const spawn = require("child_process").spawn;
const Promise = require('bluebird')

const NoNoWords = [ "process", "sys", "exit(", "eval", "buffer", "exec(", "abort()", "exitCode" ]

async function JS(code) {
    if (NoNoWords.some(word => code.includes(word))) {
        return [ "Rejected", "No Thanks, we value our system <3" ]
    }
    try {
        evaled = await eval(code)
        const result = typeof evaled === 'string' ? evald : inspect(evaled, {
        depth: 0
    })
    return [ "success", result]
      }
      catch (error) {
          return [ "error", `${error}`]
      }
}

// async function PY(code) {
//     python = spawn('python', ["python.py", code])
//     python.stdout.on("data", data => {
//         python.kill()
//         return [ "success", `${data}` ]
//     })
//     python.stderr.on('data', (data) => {
//         return [ "error", `${data}`]
//     })
//     python.on("close", (code) => {
//         return [ "error", `${code}`]
//     })
// }

module.exports = { JS, PY };