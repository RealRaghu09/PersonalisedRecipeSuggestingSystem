#Flask or FAST API
from flask import Flask ,jsonify , request , render_template
import os
from flask_cors import CORS
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
@app.route('/generate/food')
def generate_food():
    '''
    Generates Food from data that we get from db and process it and gives the text in json as 
    {
    'generate' : {"fried rice " :{prep : "Details"}, "noodles" : {prep : "Details"} , "Biryani" : {prep : "Details"}}
    
    }
    '''
    return jsonify({"message":"Hi"})


if __name__ == '__main__':
    app.run(debug=True)