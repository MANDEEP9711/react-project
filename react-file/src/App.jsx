import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const name = 'mandeep singh'
  const userobj={studentname:"mandeep",age:29}
  const userarr=["mandeep", "singh", "kumar", "rajput"]
  let x=10;
  let y=20;
  function func(){
    return "hello world"; 
  }
  function sum(a, b,op) {
    if(op=="+") return a + b;
    else if(op=="-") return a - b;
    else if(op=="*") return a * b;
    else return a / b;
  }
  let imgel = "src/images/download.jpg";
  return (
    <>
       <div>
        <h1 className="bg-green-200 text-blue-500">jsx with curly braces</h1>
        <h2 className='bg-amber-200 m-2 w-35 rounded-3xl p-3'>{name?name:"user not found"}</h2>
        <button className='rounded-2xl p-1 bg-amber-100 text-blue-300 cursor-pointer' onClick={func}>click on</button>
        <p>{sum(x,y,"*")} {name?name:"user not found"} {func()}</p>
        <p>name: {userobj.studentname}</p>
        <p>age: {userobj.age}</p>
        <p>user array: {userarr.map((index) => <span>{index} </span>)}</p>
        <img src={imgel} className='rounded-xl'/>
        <input type="text" placeholder={name} className='border-1 rounded-sm text-red-1000' />
       </div>
    </>
  )
}

export default App
