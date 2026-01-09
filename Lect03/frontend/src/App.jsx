
import { useEffect, useState } from "react"
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/joks')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.log(error)  
      })
  }, [])

  function Container({user}){
    return (
      <>
      <h1>{user}</h1>
      </>
    );
  }

  return (
    <>
      <h1>Hello chai</h1>
      <p>JOKES: {jokes.length}</p>

      {
        jokes.map((joke) => {
          return (
            <div>
              <Container user={joke.id} />
              <h2>{joke.name}</h2>
            </div>
          )
        })
      }
    </>
  )
}

export default App
