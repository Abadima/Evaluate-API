import { argv } from 'process'
import isBuffer from 'is-buffer'
import { inspect } from 'util'

const NoNoWords = ["buffer", "exec(", "process"]

if (NoNoWords.some(word => argv[2].toString().includes(word))) {
	console.error("No Thanks, we value our system <3")
}

if (isBuffer(argv[2])) {
    console.error("No Thanks, we value our system <3")
}

try {
	evaled = eval(argv[2])
	const res = typeof evaled === 'string' ? evaled : inspect(evaled, {
		depth: 0
	})
	console.log(res)
} catch (error) {
	if (error.toString() === "ReferenceError: evaled is not defined") {
		try {
			let results = eval(argv[2])
			console.log(results)
		} catch (error) {
			console.error(error)
		}
	} else {
		console.error(error)
	}
}