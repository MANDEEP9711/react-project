import React,{useState} from 'react'

const radio = () => {
    const [gender,setgender]=useState("female")
  return (
    <div className='bg-gray-300 flex flex-col items-center justify-center h-100 gap-4'>
        <div className='bg-white p-4 rounded-3xl shadow-md w-96 flex flex-col items-center gap-4 text-blue-550'>
            <h1 className='text-2xl text-blue-800 font-bold'>select gender</h1>
            <div className='flex gap-2'>
                <input type="radio" name='gender' value={'male'} id='male'
                 onChange={(e)=>setgender(e.target.value)} checked={gender=='male'}/>
                <label htmlFor="male"> Male</label> <br />
                <input type="radio" name='gender' value={'female'} id='female'
                 onChange={(e)=>setgender(e.target.value)} checked={gender=='female'}/>
                <label htmlFor="female"> female</label>
            </div>
            <h1 className='text-red-900 font-bold h-10 w-[100px] flex justify-center items-center bg-green-200 rounded-2xl'>{gender}</h1>
        </div>
    </div>

  )
}

export default radio