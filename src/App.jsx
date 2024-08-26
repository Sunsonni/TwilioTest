import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EmailSignUp from './Components/EmailSignUp'
import SpotOnEmbed from './Components/SpotOnEmbed'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <EmailSignUp/>
     <SpotOnEmbed/>
    </>
  )
}

export default App
