import logo from './logo.svg'
import './App.css'
import Result from './Result'

function App() {
  let data = [
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
  ]

  return (
    <div>
      <div className="header">
        <div className="firstchild">
          <img src="images/google.png" />
        </div>
        <div className="firstchild">
          <form>
            <input type="text" />
            <button>Search</button>
          </form>
        </div>
      </div>
      <hr className="line" />
      <div className="wrap">
        <div className="results">{data.length} result </div>
        <Result data={data} />
      </div>
    </div>
  )
}
export default App
