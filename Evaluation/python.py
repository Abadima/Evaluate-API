from lib2to3.pgen2.literals import evalString
from logging import error
from sre_parse import TYPE_FLAGS
import sys

try:
    result = evalString(sys.argv[1])
    print(result)

except Exception as err:
    error(err)
