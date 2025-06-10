import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MakeComp from './makecomp'
import File from './file'
import './App.css'
import Checkbox from './checkbox'
import Radio from './prec/radio'
import Dropdown from './prec/dropdown'

function App() {
  return (
    <div>
      <Radio />
      <Dropdown />
    </div>
  )
}

export default App
