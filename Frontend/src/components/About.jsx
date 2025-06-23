function About() {
  return (
    <div className="content">
      <h1>About</h1>
      <p>
        The Personalised Recipe Suggester leverages AI to recommend recipes based on your input. It considers allergies, cuisine preferences, and even helps you reduce your environmental impact.
      </p>
      <p>
      ➣ 📸 Image-Based Ingredient Detection
Users can upload an image of fruits and vegetables; the app detects only edible items and filters out irrelevant objects.
</p>
<p>
➣ 🌐 Cuisine Selection
Choose from various cuisines like Indian, Italian, or Chinese to get recipes that match your taste preferences.
</p>
<p>
➣ 🚫 Allergy Awareness
Users can specify food allergies (e.g., nuts, dairy, gluten), and the app ensures recipes do not include those ingredients.
</p>
<p>
➣ 🍽️ Personalized Recipe Suggestions
Instantly generates 5 unique, easy-to-make recipes using the ingredients detected, selected cuisine, and allergy settings.
</p>
<p>
➣ 🙌 User-Friendly and Accessible
Simple, intuitive interface designed to make recipe discovery fast, fun, and safe for everyone.
</p>
<p>
➣ 🌱 Promotes Healthy and Sustainable Eating
Encourages users to make use of available ingredients, helping reduce food waste and cook healthier meals.
      </p>
      <div className="image-placeholder">[Image Space]</div>
    </div>
  )
}

export default About; 