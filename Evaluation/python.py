from logging import error
import inspect
import sys
import os

lst = ["system", "subprocess", "eval", "sys", "inspect"]

if any(sys.argv[1] in x for x in lst):
    error("We can't let you do that.")

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
