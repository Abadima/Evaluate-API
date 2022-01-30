from logging import error
import inspect
import sys

try:
    evaled = eval(sys.argv[1])
    res = isinstance(sys.argv[1], str)
    if isinstance(sys.argv[1], str):
        evaled
    else:
        inspect(evaled)

except Exception as err:
    error(err)