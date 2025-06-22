#Flask or FAST API
from flask import Flask ,jsonify , request , render_template
import os
from flask_cors import CORS
from models.Models import MyModel
#create a obj takes photo name returns dict 
from models.imageModel import ImageModel
app  = Flask(__name__)
CORS(app)


PHOTOS_FOLDER = './photos'
os.makedirs(PHOTOS_FOLDER, exist_ok=True) 
@app.route('/generate/list/food', methods=['POST'])
def upload_image():
    print("Request received:", request.method)
    
    if 'image' not in request.files:
        print("No image found in request.files")
        return jsonify({"error": "No image file part in the request"})

    image = request.files['image']

    if image.filename == '':
        print("No image selected")
        return jsonify({"error": "No selected file"})

    save_path = os.path.join(PHOTOS_FOLDER, image.filename)

    try:
        image.save(save_path)
        print("Saved image to:", save_path)
        Photo = ImageModel()
        foods_dict = Photo.generateImageInText(image.filename)
    except Exception as e:
        print("Error during image processing:", e)
        return jsonify({"error": str(e)})

    if os.path.exists(save_path):
        os.remove(save_path)

    return jsonify(foods_dict)


# def Generate_Food():
@app.route('/generate/food' ,methods=['POST'])
def generate_food():
    '''
        input type;-
        payload = {
            "food_items": ["apple", "Orange", "honey"],
            "cuisine": "india",
            "allergy" : ["milk" , "soya"]
            }
    '''
    data = request.get_json()
    data_str  = str(data)
    food_items = MyModel()
    dict_of_recipes = food_items.generate(data_str)
    return jsonify(dict_of_recipes)

    '''
output: - 

{
  "food": {
    "Apple Honey Halwa": {
      "Indian Apple Honey Halwa": [
        "Peel and grate 2-3 apples.",
        "Heat 2 tbsp of ghee in a pan.",
        "Add grated apples and saut\u00e9 until softened.",
        "Add 2 tbsp honey and mix well.",
        "Cook until the mixture thickens and turns golden brown.",
        "Garnish with chopped nuts (optional)."
      ]
    },
    "Orange and Honey Chutney": {
      "Tangy Orange Honey Chutney": [
        "Peel and segment 2 oranges.",
        "Combine orange segments with 2 tbsp honey, 1 tbsp ginger paste, and a pinch of black salt in a bowl.",
        "Mix well and let it sit for at least 30 minutes to allow flavors to blend.",
        "Serve as a side dish or spread."
      ]
    },
    "Apple and Orange Salad": {
      "Masala Apple and Orange Salad": [
        "Peel and slice 1 apple and 1 orange into bite-sized pieces.",
        "In a bowl combine apple and orange slices with finely chopped 1/2 small onion.",
        "Add 1 tbsp honey, 1/2 tsp chaat masala, and a pinch of black salt.",
        "Mix gently and serve immediately."
      ]
    },
    "Honey Glazed Apples": {
      "Indian Spiced Honey Glazed Apples": [
        "Core 2 apples and cut into wedges.",
        "In a bowl mix 2 tbsp honey with 1/2 tsp cinnamon powder and a pinch of cardamom powder.",
        "Toss apple wedges in honey mixture.",
        "Arrange apple wedges on a baking tray and bake at 180\u00b0C for 20-25 mins until tender and slightly caramelized."
      ]
    },
    "Spiced Orange and Apple Compote": {
      "Warm Spiced Orange and Apple Compote": [
        "Peel and chop 1 apple and 1 orange into small pieces.",
        "In a saucepan, combine chopped fruits with 1/4 cup water, 2 tbsp honey, a cinnamon stick, and 2 cloves.",
        "Simmer over low heat for 15-20 minutes until the apples and oranges are soft and the sauce has thickened slightly.",
        "Remove cinnamon stick and cloves. Serve warm or cold."
      ]
    }
  }
}

'''


if __name__ == '__main__':
    app.run(debug=True)