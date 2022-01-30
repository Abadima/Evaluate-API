from logging import error
import setuptools
import sys

NoNoWords = ["sysconfig"]

try:
    result = eval(sys.argv[1])
    print(result)
except Exception as err:
    error(err)
