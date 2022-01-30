from logging import error
import inspect
import sys

try:
    evaled = eval(sys.argv[1])
    res = isinstance(sys.argv[1], str)
    if isinstance(sys.argv[1], str):
        evaled
        print(evaled)
    else:
        inspect(evaled)
        print(evaled)

except Exception as err:
    error(err)