import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();
  return (
    <div className="content">
      <h1>Personalised Recipe Suggester</h1>
      <p>
        This app helps you discover recipes tailored to your preferences, dietary restrictions, and available ingredients. Upload a photo of your ingredients or enter them manually, and get delicious, healthy recipes instantly. Track your carbon footprint and make sustainable food choices!
      </p>
      <div className="image-placeholder">[Image Space]</div>
      <button className="get-started-btn" onClick={() => navigate('/uploads')}>
        Get Started
      </button>
    </div>
  )
}

export default Home;
