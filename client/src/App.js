import './App.css';
import React, { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch('http://localhost:5000/api/').then(
      res => res.json()
    ).then(
      data => {
        setData(data)
      }
    )
  }, [])
  
  return (
    <div className="App">
      {
        (typeof data.msg === 'undefined') ? (
          <p>Loading...</p>
        ) : (
          data.msg.map((user, i) => (
            <p className="text-4xl font-bold underline" key={i}>{user}</p>
          ))
        )
      }
    </div>
  );
}

export default App;
