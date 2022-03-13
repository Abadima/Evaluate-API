const ratelimit = require("express-rate-limit");
const { BF, CFS, CS, JS, PY, LUA, TS } = require("./functions.js")
const express = require("express");
const app = express()

const Languages = ["bf", "cfs", "cs", "js", "py", "ts", "lua"]

const requests = ratelimit({
    windowMs: 5 * 60 * 1000,
    max: 40,
    message: {
        status: "fatal",
        result: "Calm down! You're going too fast."
    }
});

app.get("/", requests, (req, res) => {
    res.status(200).json({
        success: true,
        docs: "https://abadima.github.io/evaluate-api"
    })
})

app.get("/:msg", (req, res) => {
    res.status(404).json({
        status: "error",
        result: "You should visit our docs *smug*",
        url: "https://abadima.github.io/evaluate-api"
    })
})

app.get("/:lang/:code", requests, (req, res) => {
    // if (req.headers["content-type"] === 'application/json') {
    if (!Languages.includes(req.params.lang)) {
        res.status(404).json({
            status: "error",
            result: "Language not Supported :("
        }); return
    }
    if (req.params.lang.toLowerCase() == "bf") {
        BF(req.params.code).then(results => {
            res.status(200).json({
                status: results[0],
                result: results[1]
            })
        })
    }
    if (req.params.lang.toLowerCase() == "cfs") {
        CFS(req.params.code).then(results => {
            res.status(200).json({
                status: results[0],
                result: results[1]
            })
        })
    }
    if (req.params.lang.toLowerCase() == "cs") {
        CS(req.params.code).then(results => {
            res.status(200).json({
                status: results[0],
                result: results[1]
            })
        })
    }
    if (req.params.lang.toLowerCase() == "js") {
        JS(req.params.code).then(results => {
            res.status(200).json({
                status: results[0],
                result: results[1]
            })
        })
    }
    if (req.params.lang.toLowerCase() == "py") {
        PY(req.params.code).then(results => {
            res.status(200).json({
                status: results[0],
                result: results[1]
            })
        })
    }
    if (req.params.lang.toLowerCase() == "lua") {
        LUA(req.params.code).then(results => {
            res.status(200).json({
                status: results[0],
                result: results[1]
            })
        })
    }
    if (req.params.lang.toLowerCase() == "ts") {
        TS(req.params.code).then(results => {
            res.status(200).json({
                status: results[0],
                result: results[1]
            })
        })
    }
    // } else {
    //     res.status(403).json({
    //         status: "fatal",
    //         result: "Forbidden, ensure your headers are set to appropriate settings."
    //     })
    // }
})

app.listen(6969, () => {
    console.log(`API Active`)
})

process.on("unhandledRejection", (reason, p) => {
    console.log("[Neko's Anti-Crash] Unhandled Rejection/Catch");
    console.log(reason, p);
});
process.on("uncaughtException", (err, origin) => {
    console.log("[Neko's Anti-Crash] Uncaught Exception/Catch");
    console.log(err, origin);
});
process.on("uncaughtExceptionMonitor", (err, origin) => {
    console.log("[Neko's Anti-Crash] Uncaught Exception/Catch (MONITOR)");
    console.log(err, origin);
});