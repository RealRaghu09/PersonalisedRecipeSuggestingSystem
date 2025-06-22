import './Loading.css';

function Loading() {
  return (
    <div className="loading-overlay">
      <div className="loading-bubbles">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>
    </div>
  );
}

export default Loading; 