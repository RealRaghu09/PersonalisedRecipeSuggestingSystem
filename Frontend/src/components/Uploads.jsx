import { useState } from 'react';
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';

function Uploads() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    setLoading(true);
    const formData = new FormData();
    formData.append('image', selectedFile);
    try {
      const response = await fetch('http://127.0.0.1:5000/generate/list/food', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      navigate('/food/items', { state: { items: data } });
    } catch (error) {
      navigate('/food/items', { state: { items: { error: 'Failed to upload image or fetch data.' } } });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="content">
      <h1>Upload an Image</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', width: '100%' }}>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button type="submit" className="get-started-btn" disabled={loading}>Upload</button>
      </form>
      <div className="image-placeholder" style={{ marginTop: '2rem' }}>
        {selectedFile ? selectedFile.name : '[Image Preview Here]'}
      </div>
      {loading && <Loading />}
    </div>
  );
}

export default Uploads; 