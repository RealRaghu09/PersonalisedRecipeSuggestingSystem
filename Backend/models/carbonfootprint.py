import json
import ast
from dotenv import load_dotenv
import google.generativeai as genai
import os

class MyModelCarbon:
    def __init__(self):
        load_dotenv()
        genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))
        self.model = genai.GenerativeModel("gemini-1.5-flash")

    def generate(self, structured_prompt: str) -> dict:
        try:
            full_prompt = f"""
            You are an organization that measures carbon footprints.

            You will receive a JSON object called datajson in the following format:
            {{
                "material": <Material>,
                "weight": <Weight>,
                "dimension": <Dimensions>,
                "intensity": <Intensity>,
                "certifications": <Certifications>
            }}

            Your task:
            - Calculate the carbon footprint value based on the input.
            - Return ONLY a valid Python dictionary in this format (no explanation, no comments, no code block formatting):

            {{
                "value": <int>,        # The calculated carbon footprint value
                "sentence": <str>,     # rate it good , moderate , high 
                "score": <int>         # A score representing the result more score it is bad 
            }}

            Input:
            {structured_prompt}

            Return only the dictionary. Do not explain or add any extra text.
            """
            response = self.model.generate_content(full_prompt)
            text = response.text.strip()

            # Clean code blocks if any
            cleaned = text.replace("```python", "").replace("```", "").strip()
            return ast.literal_eval(cleaned)

        except Exception as e:
            return {"error": f"Error from LLM: {e}"}
