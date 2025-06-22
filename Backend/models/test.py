import os
from dotenv import load_dotenv
import google.generativeai as genai
import ast


class ImageModel:
    def __init__(self):
        load_dotenv()
        genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))
        self.model = genai.GenerativeModel("gemini-1.5-flash")

    def generateImageInText(self, image_path: str) -> dict:
        try:
            # Read image
            with open(f"../photos/{image_path}", "rb") as f:
                image_bytes = f.read()

            # Prompt Gemini
            response = self.model.generate_content(
                [
                    {"mime_type": "image/jpeg", "data": image_bytes},
                    """Your given image contains human-edible food. 
                    Identify food items only, and return a Python dictionary:
                    Example (valid):
                    {
                        "food_items": ["curd", "milk", "orange", "potatoes"]
                    }
                    If no food, return:
                    {
                        "food_items": ["None"]
                    }
                    Return Python dictionary only — no explanation.
                    """
                ]
            )

            raw_response = response.text
            return self.Clean_text_to_dict(raw_response)

        except Exception as e:
            print(f"Error: {e}")
            return {"food_items": ["None"]}

    def Clean_text_to_dict(self, text: str) -> dict:
        '''
        Cleans the Gemini response and returns a Python dictionary.
        '''
        try:
            # Remove unwanted backticks and any code block markers
            cleaned = text.replace("```", "").replace("python", "").strip()
            result = ast.literal_eval(cleaned)
            # Validate dictionary format
            if isinstance(result, dict) and "food_items" in result:
                return result
        except Exception as e:
            print(f"Failed to convert to dict: {e}")
        
        return {"food_items": ["None"]}


