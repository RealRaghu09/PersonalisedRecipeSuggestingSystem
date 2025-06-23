IMAGE_SYSTEM_PROMPT = """Your given image contains human-edible food. 
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