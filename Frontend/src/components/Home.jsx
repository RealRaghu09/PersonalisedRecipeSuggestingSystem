import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();
  return (
    <div className="content">
      <h1>Personalised Recipe Suggester</h1>
      <p>
        This app helps you discover recipes tailored to your preferences, allergy restrictions, and available ingredients. Upload a photo of your ingredients or enter them manually, and get delicious, healthy recipes instantly.And also track your carbon footprint and make sustainable food choices!
      </p>
      <p>
      Have you ever looked at the fruits and vegetables lying in your kitchen and wondered, “What can I cook with these?” This app solves that problem.

It allows users to simply upload a picture of their fresh produce—like apples, carrots, tomatoes, or spinach—and instantly get delicious recipe suggestions tailored to what they have. The app smartly ignores non-food items and focuses only on fruits and vegetables from the image.

Once the ingredients are identified, the user can choose their preferred cuisine—like Indian, Italian, Chinese, or Mediterranean—and the app will generate recipes based on that flavor profile.

What makes it even more helpful is that the app takes allergies seriously. Users can mention what they’re allergic to (like dairy, gluten, or nuts), and the app will ensure that none of the recipes include those ingredients. This makes it safer for everyone, especially people with dietary restrictions.

Finally, the app presents 5 unique recipe ideas, each customized to the user’s ingredients, cuisine preference, and health needs. Whether you're trying to eat healthy, avoid waste, or just want something quick and tasty, this app gives you inspiration right from what you already have.

It’s like having a personal chef who knows exactly what’s in your kitchen and what you like to eat—without any guessing.
      </p>
      <div className="image-placeholder">
        <img src="/images/pht1.png" alt="" />
      </div>
      <button className="get-started-btn" onClick={() => navigate('/uploads')}>
        Get Started
      </button>
    </div>
  )
}

export default Home;
