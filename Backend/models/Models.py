import json
import ast
from dotenv import load_dotenv
import google.generativeai as genai
import os

class MyModel:
    def __init__(self):
        load_dotenv()
        genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))
        self.model = genai.GenerativeModel("gemini-1.5-flash")

    def generate(self, structured_prompt: str) -> dict:
        try:
            full_prompt = f"""
            You are a recipe generator.
            you have to generate 5 recipes with
            Generate a Python dictionary with this format:
            {{
            "calories" : [calory of recipe1 ,calory of recipe2,calory of recipe3,calory of recipe4,calory of recipe5],
            "level" : ["easy" ,"medium" ,"hard",level of recipe4,level of recipe5 ],
            "time" : [time of recipe1,time of recipe2,time of recipe3,time of recipe4,time of recipe5],
            "food": {{
                "dish name": {{
                "recipe name": ["step 1", "step 2", ...]
                }}
            }}
            }}
            level = "easy" , "medium" , "hard" according to the recipe
            Input:
            {structured_prompt}

            Return only the dictionary. Do not explain.
            """
            response = self.model.generate_content(full_prompt)
            text = response.text.strip()

            # Clean code blocks if any
            cleaned = text.replace("```python", "").replace("```", "").strip()
            return ast.literal_eval(cleaned)

        except Exception as e:
            return {"error": f"Error from LLM: {e}"}

# if __name__ == "__main__":
#     payload = {
#         "food_items": ["apple", "Orange", "honey"],
#         "cuisine": "india",
#         "allergy" : ["milk" , "soya"]
#     }
#     prompt_input = json.dumps(payload)
#     obj = MyModel()
#     result = obj.generate(prompt_input)
#     print(json.dumps(result, indent=2))
'''
output: - 

{
  "calories" : [123,14,53453,23224,3232],
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