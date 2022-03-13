from logging import error
import inspect
import sys
import os
lst = ["eval", "sys", "inspect", "process",
       "remove", "rmdir", "rm", "environ", "mv", "kill"]

for x in lst:
    if (sys.argv[1].__contains__(x)):
        error("We can't let you do that.")
        exit(1)
    else:
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