import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('')

  const handleTestApi = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/test');
      
      
      const data = await response.json();
      setMessage(data.message);
      console.log(data.message);
    } catch (error) {
      setMessage('Error fetching message');
    }
  }

  return (
    <>
      <button onClick={handleTestApi}>
        Call /test API
      </button>
      {message && <div>{message}</div>}
    </>
  )
}

export default App
