import './App.css'
import Result from './Result'
import { useState } from 'react'
import axios from 'axios'

// Component
function App() {
  // States
  const [results, setResults] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  // Function search
  async function search() {
    const { data } = await axios.get(process.env.REACT_APP_API_URL, {
      params: {
        search: searchTerm,
      },
    })
    return data
  }
  // Function submitForm
  async function submitForm(event) {
    event.preventDefault()
    const newResults = await search()
    setResults(newResults)
  }
  // Render JSX
  return (
    <div>
      <div className="header">
        <div className="firstchild">
          <img src="images/google.png" alt="Google" />
        </div>
        <div className="firstchild">
          <form onSubmit={(event) => submitForm(event)}>
            <input
              type="text"
              name="search"
              onKeyUp={(e) => setSearchTerm(e.target.value)}
            />
            <button>Search</button>
          </form>
        </div>
      </div>
      <hr className="line" />
      <div className="wrap">
        <div className="results">{results.length} results</div>
        <div>
          {results.map((result, index) => (
            <Result result={result} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

// Export
export default App
