var spawn = require("child_process").spawn

async function BF(code) {
    const brainfuck = spawn('node', ["./Evaluation/brainfuck.js", `${code}`])
    function timeout() {
        brainfuck.kill()
        return (["fatal", "No Output Detected"])
    }
    const tSystem = setTimeout(timeout, 2000)

    return new Promise((resolve, reject) => {
        brainfuck.stdout.on("data", data => {
            clearTimeout(tSystem)
            resolve([
                "success", data.toString().substring(7)
            ]);
            brainfuck.kill()
        })
        brainfuck.stderr.on('data', (data) => {
            clearTimeout(tSystem)
            resolve([
                "error", "We're unable to provide the error at this time. \n You should recheck your code." //data.toString().substring(7)
            ]);
            brainfuck.kill()
        })
        brainfuck.on('exit', (code) => {
            clearTimeout(tSystem)
            if (!code && !'0') {
                reject("Evaluation Closed");
            } else {
                if (code != 0)
                    resolve(["error", `Exit Code ${code}`])

                if (code == 0)
                    resolve(["success", `Successful Exit Code ${code}`])

            }
        })
    }).catch(error => {
        clearTimeout(tSystem)
        return (["fatal", error])
    });
}

async function CFS(code) {
    //    const coffeescript = spawn('node', ["./Evaluation/coffeescript.coffee", `${code}`])
    return (["error", "CoffeeScript is Broken (For Now)"])
    //    return new Promise((resolve, reject) => {
    //        coffeescript.stdout.on("data", data => {
    //            resolve([
    //                "success", data.toString().slice(0, -1)
    //            ]);
    //            coffeescript.kill()
    //        })
    //        coffeescript.stderr.on('data', (data) => {
    //            resolve(["error", data.toString()]) // .split('\n')[0]]);
    //            coffeescript.kill()
    //        })
    //        coffeescript.on('exit', (code) => {
    //            if (!code && !'0') {
    //                reject("Evaluation Closed");
    //            } else {
    //                if (code != 0)
    //                    resolve(["error", `Exit Code ${code}`])
    //
    //                if (code == 0)
    //                    resolve(["success", `Successful Exit Code ${code}`])
    //
    //            }
    //        })
    //    }).catch(error => {
    //        return (["fatal", error])
    //    });
}

async function CS(code) {
    return (["error", "C# Not Available (Yet?)"])
}

async function JS(code) {
    const javascript = spawn('node', ["./Evaluation/javascript.js", `${code}`])
    function timeout() {
        javascript.kill()
        return (["fatal", "No Output Detected"])
    }
    const tSystem = setTimeout(timeout, 2000)
    return new Promise((resolve, reject) => {
        javascript.stdout.on("data", data => {
            clearTimeout(tSystem)
            resolve([
                "success", data.toString().slice(0, -1)
            ]);
            javascript.kill()
        })
        javascript.stderr.on('data', (data) => {
            clearTimeout(tSystem)
            resolve([
                "error", data.toString().split('\n')[0]
            ]);
            javascript.kill()
        })
        javascript.on('exit', (code) => {
            clearTimeout(tSystem)
            if (!code && !'0') {
                reject("Evaluation Closed");
            } else {
                if (code != 0)
                    resolve(["error", `Exit Code ${code}`])

                if (code == 0)
                    resolve(["success", `Successful Exit Code ${code}`])

            }
        })
    }).catch(error => {
        return (["fatal", error])
    });
}

async function LUA(code) { // const lua = spawn('unknown', ["./Evaluation/lua.lua", `${code}`])

    return (["error", "Lua Not Available"])
    // return new Promise((resolve, reject) => {
    // lua.stdout.on("data", data => {
    // resolve(["success", data.toString().split('\r\n')[0]]);
    // lua.kill()
    // })
    // lua.stderr.on('data', (error) => {
    // reject(["error", error.toString()])//.split('\r')[0]]);
    // python.kill()
    // })
    // lua.on('exit', (code) => {
    // if (!code && !'0') {
    // reject("Evaluation Closed");
    // } else {
    // if (code != 0) resolve(["error", `Exit Code ${code}`])
    // if (code == 0) resolve(["success", `Successful Exit Code ${code}`])
    // }
    // })
    // }).catch(error => {
    // return (["error", error[1]])
    // });
}

async function PY(code) {
    const python = spawn('python3', ["./Evaluation/python.py", `${code}`])
    function timeout() {
        python.kill()
        return (["fatal", "No Output Detected"])
    }
    const tSystem = setTimeout(timeout, 2000)
    return new Promise((resolve, reject) => {
        python.stdout.on("data", data => {
            clearTimeout(tSystem)
            resolve([
                "success", data.toString().split('\r\n')[0]
            ]);
            python.kill()
        })
        python.stderr.on('data', (error) => {
            clearTimeout(tSystem)
            reject([
                "error", error.toString().split('\r')[0]
            ]);
            python.kill()
        })
        python.on('exit', (code) => {
            clearTimeout(tSystem)
            if (!code && !'0') {
                reject("Evaluation Closed");
            } else {
                if (code != 0)
                    resolve(["error", `Exit Code ${code}`])

                if (code == 0)
                    resolve(["success", `Successful Exit Code ${code}`])

            }
        })
    }).catch(error => {
        clearTimeout(tSystem)
        return ([
            "error", error[1]
        ])
    });
}

async function TS(code) {
    const typescript = spawn('node', ["./Evaluation/typescript.ts", `${code}`])
    function timeout() {
        typescript.kill()
        return (["fatal", "No Output Detected"])
    }
    const tSystem = setTimeout(timeout, 2000)

    return new Promise((resolve, reject) => {
        typescript.stdout.on("data", data => {
            clearTimeout(tSystem)
            resolve([
                "success", data.toString().slice(0, -1)
            ]);
            typescript.kill()
        })
        typescript.stderr.on('data', (data) => {
            clearTimeout(tSystem)
            resolve([
                "error", data.toString().split('\n')[0]
            ]);
            typescript.kill()
        })
        typescript.on('exit', (code) => {
            clearTimeout(tSystem)
            if (!code && !'0') {
                reject("Evaluation Closed");
            } else {
                if (code != 0)
                    resolve(["error", `Exit Code ${code}`])

                if (code == 0)
                    resolve(["success", `Successful Exit Code ${code}`])

            }
        })
    }).catch(error => {
        clearTimeout(tSystem)
        return (["fatal", error])
    });
}

module.exports = { BF, CFS, CS, JS, PY, LUA, TS }