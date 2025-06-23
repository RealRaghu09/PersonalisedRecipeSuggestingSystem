import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './FoodItemsPopup.css';

function FoodItemsPopup() {
  const location = useLocation();
  const navigate = useNavigate();
  const apiData = location.state?.items || {};
  const [items, setItems] = useState(apiData.food_items || []);
  const [inputValue, setInputValue] = useState('');
  const [cuisine, setCuisine] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCuisineChange = (e) => {
    setCuisine(e.target.value);
  };

  const handleAddItems = () => {
    if (!inputValue.trim()) return;
    const newItems = inputValue
      .split(/[\s,]+/)
      .map(item => item.trim())
      .filter(item => item.length > 0);
    setItems([...items, ...newItems]);
    setInputValue('');
  };

  const handleSubmit = () => {
    console.log('Cuisine:', cuisine);
    navigate('/allergy', { state: { items, cuisine } });
  };

  return (
    <div className="food-popup-overlay">
      <div className="food-popup">
        <h2 style={{marginTop: '1.5rem'}}>Food Items</h2>
        {items[0] !== "None" && items.length > 0 ? (
          <>
            <ol className="food-list">
              {items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
            <div>
              <h2>Add Any Item that is not Found</h2>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Type items separated by space or comma"
              />
              <button type="button" onClick={handleAddItems}>Add</button>
            </div>
            <div style={{marginTop: '1.5rem'}}>
              <h2>Cuisine</h2>
              <input
                type="text"
                value={cuisine}
                onChange={handleCuisineChange}
                placeholder="Enter preferred cuisine (e.g., Italian, Indian)"
                style={{width: '100%', padding: '0.5rem', borderRadius: '8px', border: '1px solid #444', marginBottom: '1rem'}}
              />
              <button type="button" style={{marginLeft: '0'}} onClick={handleSubmit}>Submit</button>
            </div>
          </>
        ) : (
          <div>
            <div className="no-items">No food items detected.</div>
            <div className="no-items">Please Try Again !</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FoodItemsPopup; 