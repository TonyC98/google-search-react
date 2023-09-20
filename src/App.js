import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
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
        <div className="results">37 results </div>
        <div className="child">
          <span>www.w3school.com</span>
          <h2>
            <a href="https://www.w3schools.com/" target="_blank">
              Link reference in the header
            </a>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            minima aspernatur iste ipsa? Dicta, quidem ex aliquid nulla,
            exercitationem rem officiis obcaecati voluptatem possimus est, minus
            illo impedit. Quisquam impedit consequuntur molestias, tempora
            minima non?.
          </p>
          <ul>
            <li>
              <a href="https://www.w3schools.com/" target="_blank">
                First link
              </a>
            </li>
            <li>
              <a href="https://www.w3schools.com/" target="_blank">
                Second link
              </a>
            </li>
            <li>
              <a href="https://www.w3schools.com/" target="_blank">
                Third link
              </a>
            </li>
          </ul>
        </div>
        <div className="child">
          <span>www.w3school.com</span>
          <h2>
            <a href="https://www.w3schools.com/" target="_blank">
              Link reference in the header
            </a>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            repudiandae blanditiis minus molestiae sunt magnam, accusamus omnis
            est? Nisi, provident commodi odit obcaecati eius beatae voluptate
            totam unde impedit, quia nostrum. Magni minus ipsum iure?
          </p>
          <ul>
            <li>
              <a href="https://www.w3schools.com/" target="_blank">
                First link
              </a>
            </li>
            <li>
              <a href="https://www.w3schools.com/" target="_blank">
                Second link
              </a>
            </li>
            <li>
              <a href="https://www.w3schools.com/" target="_blank">
                Third link
              </a>
            </li>
          </ul>
        </div>
        <div className="child">
          <span>www.w3school.com</span>
          <h2>
            <a href="https://www.w3schools.com/" target="_blank">
              Link reference in the header
            </a>
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            ipsa itaque tempora, debitis voluptatem quas sed quos molestiae
            dolor porro voluptates magnam unde ab aut tenetur voluptatibus
            consectetur temporibus aliquid.
          </p>
          <ul>
            <li>
              <a href="https://www.w3schools.com/" target="_blank">
                First link
              </a>
            </li>
            <li>
              <a href="https://www.w3schools.com/" target="_blank">
                Second link
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App

let data = [
  {
    title: 'JS tutorials',
    description: 'The best JavaScript tutorials in the galaxy!',
    url: 'https://www.w3schools.com',
    links: [
      {
        title: 'JS for Beginners',
        url: 'https://www.w3schools.com/js'
      }, {
        title: 'JS for the Web',
        url: 'https://www.w3schools.com/js'
      }
    ]
  }
]
