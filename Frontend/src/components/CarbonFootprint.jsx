import { useState } from "react";

function CarbonFootprint() {
  const [Material, setMaterial] = useState('');
  const [Weight, setWeight] = useState('');
  const [Dimensions, setDimensions] = useState('');
  const [Intensity, setIntensity] = useState('');
  const [Certifications, setCertifications] = useState('');
  const [result, setResult] = useState(null);

  const datajson = {
    material: Material,
    weight: Weight,
    dimension: Dimensions,
    intensity: Intensity,
    certifications: Certifications
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('sending')
      const response = await fetch('http://127.0.0.1:5000/carbon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datajson)
      });
      const data = await response.json();
      setResult(data);
      console.log(data);
      
    } catch (error) {
      setResult({ error: 'Error sending data' });
    }
  };

  return (
    <div className="content">
      <h1>Carbon Footprint</h1>
      <p>
        Learn how your food choices impact the environment. Get tips on reducing your carbon footprint and making sustainable decisions.
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <p>Enter the Material</p>
          <input type="text" value={Material} onChange={e => setMaterial(e.target.value)} required />
        </div>
        <div>
          <p>Enter the Weight (in grams)</p>
          <input type="text" value={Weight} onChange={e => setWeight(e.target.value)} required />
        </div>
        <div>
          <p>Enter the Dimensions (if required)</p>
          <input type="text" value={Dimensions} onChange={e => setDimensions(e.target.value)} />
        </div>
        <div>
          <p>Manufacturing process intensity:</p>
          <input type="text" value={Intensity} onChange={e => setIntensity(e.target.value)} />
        </div>
        <div>
          <p>Brand sustainability certifications (B-Corp, Carbon Neutral, etc.)</p>
          <input type="text" value={Certifications} onChange={e => setCertifications(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
      {result && (
        <div style={{ marginTop: '2rem', background: '#222', color: '#a3a3ff', borderRadius: '8px', padding: '1rem', maxWidth: 400 }}>
          {result.error ? (
            <div>{result.error}</div>
          ) : (
            <>(More the Score more the harm to the Environment )
              <div><strong>Score:</strong> {result.score}</div>
              <div><strong>Sentence:</strong> {result.sentence}</div>
              <div><strong>Carbon Footprint Index:</strong> {result.value}</div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default CarbonFootprint; 