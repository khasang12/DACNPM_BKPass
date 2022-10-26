import { useState, useEffect } from "react";
import { Homepage } from "./HomePage";

function InitPage() {
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
        (typeof data.msg === 'undefined') ?
        (
          <Homepage />
          ) : (
          <p>Loading...</p>
          )
      }
    </div>
  );
}

export default InitPage;