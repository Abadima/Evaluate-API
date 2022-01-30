argv = require('process')
inspect = require('util')

try
  evaled = eval(argv[2])
  res = if typeof evaled == 'string' then evaled else inspect(evaled, depth: 0)
  console.log res
catch error
  if error.toString() == 'ReferenceError: evaled is not defined'
    try
      results = eval(process.argv[2])
      console.log results
    catch error
      console.error error
  else
    console.error error