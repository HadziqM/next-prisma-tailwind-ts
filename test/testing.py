from psql import *
import asyncio


def convert(fetchall):
    c = [fetchall[i][0] for i in range(len(fetchall))]
    return c


def numb(val):
    if (val == None or val == 'None'):
        return 0
    else:
        return val


class basicpg:
    def __init__(self):
        self.param = config('postgresql')

    async def get(self, table, row, sort=None, condition_c=None, condition_v=None):
        conn = await asyncpg.connect(user='postgres', password='suweseru',
                                     database='prisma', host='127.0.0.1')
        if condition_c:
            sql = f"select {row} from {table} where {condition_c}={condition_v}"
            res = await conn.fetchval(sql)
        else:
            if sort:
                sql = f"select {row} from {table} sort by {sort} descend"
            else:
                sql = f"SELECT * FROM {table}"
            res = await conn.fetch(sql)
        await conn.close()
        return res


loop = asyncio.get_event_loop()
a = loop.run_until_complete(basicpg().get("users", "id"))
print(a)
a[0].username
