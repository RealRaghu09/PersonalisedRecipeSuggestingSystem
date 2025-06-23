import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Features from './components/Features'
import CarbonFootprint from './components/CarbonFootprint'
import Uploads from './components/Uploads'
import FoodItemsPopup from './components/FoodItemsPopup'
import ResultsPopup from './components/ResultsPopup'
import { useNavigate, useLocation } from 'react-router-dom'

const COMMON_ALLERGIES = [
  'Peanuts',
  'Tree nuts',
  'Milk',
  'Eggs',
  'Fish',
  'Shellfish',
  'Wheat',
  'Soy',
  'Sesame',
  'Gluten',
  'Mustard',
  'Celery',
  'Lupin',
  'Sulphites',
];

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Recipe Suggester</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/carbon-footprint">Carbon Footprint</Link></li>
      </ul>
    </nav>
  )
}

function AllergyPopup() {
  const location = useLocation();
  const [selectedAllergies, setSelectedAllergies] = useState([]);
  const items = location.state?.items || [];
  const cuisine = location.state?.cuisine || '';
  const navigate = useNavigate();

  const handleAllergyClick = (allergy) => {
    setSelectedAllergies((prev) =>
      prev.includes(allergy)
        ? prev.filter(a => a !== allergy)
        : [...prev, allergy]
    );
  };

  const handleGenerate = async () => {
    const payload = {
      food_items: items,
      cuisine,
      allergy: selectedAllergies
    };
    try {
      const response = await fetch('http://127.0.0.1:5000/generate/food', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      navigate('/results', { state: { results: data } });
    } catch (error) {
      alert('Failed to generate recipes.');
    }
  };

  return (
    <div className="food-popup-overlay">
      <div className="food-popup">
        <h2 style={{marginTop: '1.5rem'}}>Select Allergies</h2>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem'}}>
          {COMMON_ALLERGIES.map((allergy) => (
            <button
              key={allergy}
              type="button"
              style={{
                padding: '0.5rem 1.2rem',
                borderRadius: '8px',
                border: selectedAllergies.includes(allergy) ? '2px solid #a3a3ff' : '1px solid #444',
                background: selectedAllergies.includes(allergy) ? '#a3a3ff' : '#222',
                color: selectedAllergies.includes(allergy) ? '#222' : '#fff',
                fontWeight: 500,
                cursor: 'pointer',
                outline: 'none',
                transition: 'all 0.2s',
              }}
              onClick={() => handleAllergyClick(allergy)}
            >
              {allergy}
            </button>
          ))}
        </div>
        {selectedAllergies.length > 0 && (
          <div style={{marginBottom: '1.2rem'}}>
            <strong>Selected Allergies:</strong>
            <ul>
              {selectedAllergies.map((a, i) => <li key={i}>{a}</li>)}
            </ul>
          </div>
        )}
        <button
          type="button"
          className="get-started-btn"
          style={{width: '100%', marginTop: '1.2rem'}}
          onClick={handleGenerate}
        >
          Generate
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/carbon-footprint" element={<CarbonFootprint />} />
          <Route path="/uploads" element={<Uploads />} />
          <Route path="/food/items" element={<FoodItemsPopup />} />
          <Route path="/allergy" element={<AllergyPopup />} />
          <Route path="/results" element={<ResultsPopup />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
