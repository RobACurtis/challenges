from fastapi import FastAPI, Path
import psycopg2



conn = psycopg2.connect("dbname=todos user=dev")
cur = conn.cursor()
app = FastAPI()

@app.get("/")
def home():
    cur.execute('SELECT * FROM todo;')
    rows = cur.fetchall()
    todos = []
    index = 0
    for r in rows:
      todos.append({
        "id":r[0],
        "todo": r[1],
        "completed": r[2]
        })
      index = index + 1

    return todos

@app.post("/add-item/{todo}")
def about(todo: str):
    print(todo)
    SQL = 'insert into todo ("Todo") values (%s);'
    data = (todo,)
    cur.execute(SQL, data)
    conn.commit()

@app.delete("/delete/{item_id}")
def get_item(item_id: int ):
    SQL = 'delete from todo where "id" = %s;'
    data = (item_id,)
    cur.execute(SQL, data)
    conn.commit()


# cur.close()
# conn.close()
