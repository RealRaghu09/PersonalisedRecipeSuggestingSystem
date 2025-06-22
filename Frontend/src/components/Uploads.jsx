import { useState } from 'react';
import Loading from './Loading';

function Uploads() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [apiInfo, setApiInfo] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setApiInfo(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    setLoading(true);
    setApiInfo(null);
    const formData = new FormData();
    formData.append('image', selectedFile);
    try {
      const response = await fetch('http://127.0.0.1:5000/generate/list/food', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      setApiInfo(data);
    } catch (error) {
      setApiInfo({ error: 'Failed to upload image or fetch data.' });
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
      {apiInfo && (
        <div style={{ marginTop: '2rem', width: '100%', color: '#a3a3ff', background: '#222', borderRadius: '8px', padding: '1.5rem', wordBreak: 'break-word' }}>
          <pre style={{ color: '#a3a3ff', background: 'none', margin: 0 }}>{JSON.stringify(apiInfo, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Uploads; 