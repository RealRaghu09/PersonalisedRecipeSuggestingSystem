import React from 'react';
import { useLocation } from 'react-router-dom';
import './FoodItemsPopup.css';

function ResultsPopup() {
  const location = useLocation();
  const results = location.state?.results || {};
  const food = results.food || {};
  const times = results.time || [];
  const levels = results.level || [];
  const calories = results.calories || [];

  // Get recipe names in the order they appear in the food object
  const recipeNames = Object.keys(food);

  return (
    <div className="food-popup-overlay">
      <div className="food-popup" style={{maxHeight: '90vh', overflowY: 'auto'}}>
        <h2 style={{marginTop: '1.5rem'}}>Generated Recipes</h2>
        {recipeNames.length === 0 ? (
          <div className="no-items">No recipes found.</div>
        ) : (
          <div>
            {recipeNames.map((recipeName, idx) => (
              <div key={recipeName} style={{marginBottom: '2rem'}}>
                <h3 style={{color: '#a3a3ff'}}>{recipeName}</h3>
                <div style={{marginBottom: '0.5rem', color: '#e0e0e0'}}>
                  <strong>Time:</strong> {times[idx] || '-'} &nbsp;|&nbsp; 
                  <strong>Level:</strong> {levels[idx] || '-'} &nbsp;|&nbsp; 
                  <strong>Calories:</strong> {calories[idx] || '-'}
                </div>
                {Object.entries(food[recipeName]).map(([variantName, steps]) => (
                  <div key={variantName} style={{marginBottom: '1rem'}}>
                    <h4 style={{color: '#fff', marginBottom: '0.5rem'}}>{variantName}</h4>
                    <ol style={{color: '#e0e0e0', paddingLeft: '1.5rem'}}>
                      {steps.map((step, stepIdx) => (
                        <li key={stepIdx}>{step}</li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ResultsPopup; 