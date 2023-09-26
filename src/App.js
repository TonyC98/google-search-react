import './App.css'
import Result from './Result'
import { useState } from 'react'
import { search } from './functions'

// Data
const data = [
  {
    title: 'JS tutorials',
    description: 'The best JavaScript tutorials in the galaxy!',
    url: 'https://www.w3schools.com',
    links: [
      {
        title: 'JS for Beginners',
        url: 'https://www.w3schools.com/js',
      },
      {
        title: 'JS for the Web',
        url: 'https://www.w3schools.com/js',
      },
    ],
  },
  {
    title: 'React tutorials',
    description: 'The best React tutorials!',
    url: 'https://www.w3schools.it',
    links: [
      {
        title: 'React for Beginners',
        url: 'https://www.w3schools.com/js',
      },
      {
        title: 'React for the Web',
        url: 'https://www.w3schools.com/js',
      },
    ],
  },
  {
    title: 'Pyton tutorials',
    description: 'The best Pyton tutorials!',
    url: 'https://www.w3schools.com',
    links: [
      {
        title: 'Pyton for Beginners',
        url: 'https://www.w3schools.com/js',
      },
      {
        title: 'Pyton for the Web',
        url: 'https://www.w3schools.com/js',
      },
    ],
  },
]
// Component
function App() {
  // States
  const [results, setResults] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  // Functions
  function submitForm(event) {
    event.preventDefault()
    setResults(search(data, searchTerm))
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
