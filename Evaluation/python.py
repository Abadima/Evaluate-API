from logging import error
import inspect
import sys

try:
    evaled = eval(sys.argv[1])
    if isinstance(sys.argv[1], str):
        print(evaled)
    else:
        inspect(evaled)

except Exception as err:
    if err == 'ERROR:root:invalid syntax (<string>, line 1)':
        try:
            evaled
        except Exception as err:
            error(err)
    else:
        error(err)
