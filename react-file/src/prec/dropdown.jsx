import React,{useState} from 'react'

const dropdown = () => {
    const [city,setcity]=useState("delhi")
  return (
    <div>
        <div className='bg-gray-300 flex flex-col items-center justify-center h-100 gap-4'>
            <div className='bg-white p-4 rounded-3xl shadow-md w-96 flex flex-col items-center gap-4 text-blue-550'>
                <h1 className='text-2xl text-blue-800 font-bold'>select city</h1>
                <select name="city" id="city" value={city} onChange={(e)=>setcity(e.target.value)} className='border border-blue-500 rounded-lg p-2'>
                    <option value="delhi">Delhi</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="bangalore">Bangalore</option>
                    <option value="chennai">Chennai</option>
                </select>
                <h1 className='text-red-900 font-bold h-10 w-[100px] flex justify-center items-center bg-green-200 rounded-2xl'>{city}</h1>
            </div>
        </div>
    </div>
  )
}

export default dropdown