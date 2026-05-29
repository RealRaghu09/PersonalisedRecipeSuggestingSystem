
# AI-Based Personalized Recipe Suggestion System

## Project Overview

The AI-Based Personalized Recipe Suggestion System is an intelligent cooking assistant that combines Computer Vision, NLP, and Recommendation Systems to generate personalized and health-aware recipes from uploaded food images.

The system allows users to upload an image containing food items, automatically detects edible ingredients, removes non-edible objects, and generates customized recipes based on:

* User preferences
* Allergies
* Selected cuisine

The project focuses on building a smart and adaptive recipe generation pipeline for real-world cooking assistance.

---

# Features

## 1. Image-Based Food Detection

Users can upload an image containing fruits, vegetables, or other food items.

The system:

* Detects edible ingredients
* Filters non-edible objects
* Extracts usable food items from the image

### Technologies Used

* Gemini Vision Model
* Image Classification
* Object Detection

---

# 2. Dynamic Ingredient Management

Users can manually add ingredients if something is missing from detection.

### Features

* New ingredients are stored dynamically
* Reused in future generations
* Improves personalization over time

---

# 3. Allergy-Aware Recipe Generation

The system supports allergy-safe recipe generation.

Users can select allergies such as:

* Nuts
* Dairy
* Gluten
* Seafood

The recommendation engine strictly avoids allergic ingredients during recipe creation.

### Goal

Generate recipes that are:

* Personalized
* Safe
* Health-aware

---

# 4. Cuisine Selection

Users can choose their preferred cuisine before generating recipes.

## Supported Cuisines

| Cuisine       | Description                                   |
| ------------- | --------------------------------------------- |
| Indian        | Rich spices and traditional flavors           |
| Italian       | Pasta, cheese, herbs, and Mediterranean style |
| Chinese       | Stir-fried dishes and balanced flavors        |
| Mexican       | Spicy and vibrant food combinations           |
| Mediterranean | Healthy olive-oil-based cuisine               |

---

# 5. Smart Recipe Generation

The AI engine generates 5 personalized recipes based on:

* Detected ingredients
* Cuisine preference
* Allergy constraints

Each recipe includes:

* Step-by-step cooking instructions
* Estimated cooking time
* Difficulty level
* Protein content per 100g
* YouTube tutorial link
* Nutrients 

---

# System Architecture

```text
Image Upload
      ↓
Food Detection (Computer Vision Model)
      ↓
Edible vs Non-Edible Filtering
      ↓
Ingredient Normalization
      ↓
Allergy Filtering
      ↓
Cuisine-Based Recommendation
      ↓
Recipe Generation Engine
      ↓
Nutritional Analysis
      ↓
YouTube Tutorial Mapping
```

---

# Tech Stack

## AI / ML

* Python
* Gemini Vision
* Gemini
* NLP-based Recommendation Logic

## Backend

* Flask

## Frontend

* Vite


---

# AI Concepts Used

## Computer Vision

Used for:

* Ingredient detection
* Food classification
* Edible object filtering

---

Used for:

* Ingredient similarity matching
* Personalized recipe generation
* Cuisine-based recommendations

---
## Enhacements 

* User profile and taste history
* Calorie-based meal planning
* Voice-based ingredient input
* Mobile app integration
* LLM-based recipe refinement
* Smart kitchen assistant integration

---

# Use Cases

* Health-conscious users
* Allergy-sensitive individuals
* Beginners learning cooking
* AI-powered kitchen assistants
* Personalized nutrition systems
