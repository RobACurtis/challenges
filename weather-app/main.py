import psycopg2
import requests

response = requests.get("https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&appid=apikey")
weather = response.json()
print(weather['daily'][0]['weather'])

conn = psycopg2.connect("dbname=weather user=dev")
cur = conn.cursor()



SQL = 'insert into location ("timezone", "lattitude", "longitude") values (%s, %s ,%s);'
data = (weather["timezone"], weather["lat"], weather["lon"])
cur.execute(SQL, data)
conn.commit()


cur.close()
conn.close()
































# @app.post("/add-item/{todo}")
# def about(todo: str):
#     print(todo)
#     SQL = 'insert into todo ("Todo") values (%s);'
#     data = (todo,)
#     cur.execute(SQL, data)
#     conn.commit()

# @app.delete("/delete/{item_id}")
# def get_item(item_id: int ):
#     SQL = 'delete from todo where "id" = %s;'
#     data = (item_id,)
#     cur.execute(SQL, data)
#     conn.commit()
