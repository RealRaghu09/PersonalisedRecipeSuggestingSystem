Demo Link
[Demo Link](https://youtu.be/6yi-9wbOftc)

An AI-based Personalized Recipe Suggestion System that takes an image of food items, identifies edible ingredients, excludes non-edible objects, and generates custom recipes based on user preferences, allergies, and cuisine selection.

This project integrates Computer Vision + NLP + Recommendation Logic to deliver intelligent, health-aware recipe generation.

 Key Features
Image-Based Food Detection - Gemini

Upload an image containing fruits or edible items

Automatically:

 Excludes non-edible objects

 Identifies edible food items

Uses Computer Vision for food classification

 Dynamic Ingredient Management

Users can add new food items dynamically

Newly added ingredients are stored and reused in future generations

 Allergy-Aware Recipe Generation

Users can select food allergies (e.g., nuts, dairy, gluten)

The system strictly avoids allergic ingredients during recipe generation

Cuisine Selection with Descriptions

Users can choose preferred cuisines such as:

Indian

Italian

Chinese

Mexican

Mediterranean

Each cuisine includes a short description to help users decide.

 Smart Recipe Generation

Generates 5 personalized recipes per request

Recipes are based on:

Detected ingredients

Selected cuisine

Allergy constraints

Each recipe includes:

 Detailed step-by-step instructions

 Estimated cooking time

 Difficulty level (Easy / Medium / Hard)

 Protein content per 100g

YouTube tutorial link

 System Architecture (High-Level)

Image Input

Food Classification (CV Model)

Edible vs Non-Edible Filtering

Ingredient Normalization

Allergy Filtering

Cuisine-Based Recommendation

Recipe Generation Engine

Nutritional Analysis

YouTube Link Mapping

 Tech Stack
AI / ML

Python

NLP & Recommendation

Ingredient similarity matching


Backend

Backend - Flask 

Frontend - Vite 


YouTube Search 

Nutrition datasets / APIs




 Future Enhancements

User profile & taste history

Calorie-based meal planning

Voice-based input

Mobile app integration

LLM-based recipe refinement

 Use Cases

Health-conscious users

Allergy-sensitive individuals

Beginners learning cooking

AI-powered smart kitchen systems
