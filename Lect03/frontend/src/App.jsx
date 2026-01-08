
import { useEffect, useState } from "react"
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:5000/jokes')
    .then((response) => {
      setJokes(response.data)
    })
    .catch((error) => {
      console.log(error);
    })
  })

  return (
    <>
      <h1>Hello chai</h1>
      <p>JOKES: {jokes.legth}</p>

      {
        jokes.map((joke, idx) => {
          <div key={joke.id}>
            <h3>{joke.title}</h3>
          </div>
        })
      }
    </>
  )
}

export default App
