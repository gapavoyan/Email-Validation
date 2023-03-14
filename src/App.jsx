import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import EmailComonent from './emailComonent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <EmailComonent />
    </div>
  )
}

export default App
