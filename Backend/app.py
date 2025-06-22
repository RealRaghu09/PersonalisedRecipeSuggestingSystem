#Flask or FAST API
from flask import Flask ,jsonify
from flask_cors import CORS
app  = Flask(__name__)
CORS(app)
@app.route('/')
def Home_page():
    return('<div>Hello</div>')
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
@app.route('/get/ImageItem' , methods = ['POST'])
def get_Image_Content():
    '''
    identifies the image and gives the text back in jsom (need to predict the output )
    '''
    return "hi"

if __name__ == '__main__':
    app.run(debug=True)