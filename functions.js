var spawn = require("child_process").spawn


async function CFS(code) {
//    const coffeescript = spawn('node', ["./Evaluation/coffeescript.coffee", `${code}`])
return([ "error", "CoffeeScript is Broken (For Now)" ])
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
    const javascript = spawn('node', ["./Evaluation/javascript.mjs", `${code}`])

    return new Promise((resolve, reject) => {
        javascript.stdout.on("data", data => {
            resolve([
                "success", data.toString().slice(0, -1)
            ]);
            javascript.kill()
        })
        javascript.stderr.on('data', (data) => {
            resolve([
                "error", data.toString().split('\n')[0]
            ]);
            javascript.kill()
        })
        javascript.on('exit', (code) => {
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
    const python = spawn('python', ["./Evaluation/python.py", `${code}`])

    return new Promise((resolve, reject) => {
        python.stdout.on("data", data => {
            resolve([
                "success", data.toString().split('\r\n')[0]
            ]);
            python.kill()
        })
        python.stderr.on('data', (error) => {
            reject([
                "error", error.toString().split('\r')[0]
            ]);
            python.kill()
        })
        python.on('exit', (code) => {
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
        return ([
            "error", error[1]
        ])
    });
}

async function TS(code) {
    const typescript = spawn('node', ["./Evaluation/typescript.ts", `${code}`])

    return new Promise((resolve, reject) => {
        typescript.stdout.on("data", data => {
            resolve([
                "success", data.toString().slice(0, -1)
            ]);
            typescript.kill()
        })
        typescript.stderr.on('data', (data) => {
            resolve([
                "error", data.toString().split('\n')[0]
            ]);
            typescript.kill()
        })
        typescript.on('exit', (code) => {
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

module.exports = { CFS, CS, JS, PY, LUA, TS }