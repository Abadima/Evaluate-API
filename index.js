const ratelimit = require("express-rate-limit");
const { JS, PY } = require("./Evaluation/functions")
const express = require("express");
const app = express()
const port = 6969

const Languages = [ "js", "py" ]

const requests = ratelimit({
    windowMs: 1 * 60 *1000,
    max: 125,
    message: {
        status: 429,
        message: "Too Many Requests"
    }
});

app.get("/", requests, (req, res) => {
    res.status(200).json({
        success: true,
        docs: "https://abadima.github.io/evaluate-api"
    })
})

app.get("/:msg", (req,res) => {
    res.status(404).json({
        status: "error",
        result: "You should visit our docs *smug*",
        url: "https://abadima.github.io/evaluate-api"
    })
})

app.get("/:lang/:code",requests, (req, res) => {
    if (!Languages.includes(req.params.lang)) {
        res.status(404).json({
            status: "error",
            result: "Language not Supported :("
        })
    } else {
        if (req.params.lang.toLowerCase() == "js") {
            JS(req.params.code).then(results => {
                res.status(200).json({
                    status: results[0],
                    result: results[1]
                })
            })
        }
        if (req.params.lang.toLowerCase() == "py") {
//            PY(req.params.code).then(results => {
                res.status(200).json({
                    status: "error",
                    result: "We're still testing this."
//                })
            })
        }
    }
})

app.listen(port, () => {
    console.log(`API Active`)
})