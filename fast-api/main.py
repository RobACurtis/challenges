from fastapi import FastAPI, Path

app = FastAPI()

@app.get("/")
def home():
    return {"Hello": "World"}


@app.get("/about")
def about():
    return {"item_id": "About"}

inventory = {
        0: {
          "name": "Milk",
          "price": 3.99,
          "brand": "Kroger"
        },
        1: {
          "name": "Steak",
          "price": 11.99,
          "brand": "Kroger Farms"
        },
        2: {
          "name": "Fruit",
          "price": 2.00,
          "brand": "Ralph's"
        }
}

@app.get("/get-item/{item_id}")
def get_item(item_id: int = Path(None, description="The ID of the item you'd like to view")):
  return inventory[item_id]
