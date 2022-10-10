from configparser import ConfigParser
from definition import *
import asyncpg


def config(section, filename=CONFIG_PATH):
    parser = ConfigParser()
    parser.read(filename)
    db = {}
    if parser.has_section(section):
        params = parser.items(section)
        for param in params:
            db[param[0]] = param[1]
    else:
        raise Exception(
            'Section {0} not found in the {1} file'.format(section, filename))

    return db


class database:
    def __init__(self):
        self.param = config('postgresql')

    async def connect(self):
        conn = await asyncpg.connect(**self.param)
        return conn