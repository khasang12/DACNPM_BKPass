import { useState, useEffect } from "react";
import { Homepage } from "./HomePage";

function InitPage() {
  const [data, setData] = useState({})
  console.log(data);

  // useEffect(() => {
  //   fetch('http://localhost:5000/api/').then(
  //     res => res.json()
  //   ).then(
  //     data => {
  //       setData(data)
  //     }
  //   )
  // }, [])

  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default InitPage;