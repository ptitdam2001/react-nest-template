import { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from './logo.svg'
import './Home.css'

export function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello Vite !</h1>
        <p>
          <button type="button" onClick={() => setCount(count => count + 1)}>
            count is: {count}
          </button>
        </p>
        <Link to="rest-example">Example of REST call</Link>
      </header>
    </div>
  )
}
