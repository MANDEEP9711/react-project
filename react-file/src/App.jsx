import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500 w-30 rounded-sm m-0.5 p-1'>react project</h1>
      <p className='bg-blue-200'>using react and tailwind</p>
    </>
  )
}

export default App
