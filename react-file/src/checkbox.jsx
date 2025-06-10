import React,{useState} from 'react'

const CheckBox = () => {
  const [skill, setSkill] = useState([]);
    const handleChange = (e) => {
      if (e.target.checked) {
        setSkill([...skill, e.target.value]);
      }
      else {
        setSkill(skill.filter((item) => item !== e.target.value));
      }
    }
      return (
      <div>
        <h1>select your skills</h1>
        <input type="checkbox" id='apple' value='apple' onChange={handleChange}/>
        <label htmlFor="apple"> apple</label><br />
        <input type="checkbox" id='banana' value='banana' onChange={handleChange} />
        <label htmlFor="banana"> banana</label><br />
        <input type="checkbox" id='mango' value='mango' onChange={handleChange} />
        <label htmlFor="mango"> mango</label><br />
        <input type="checkbox" id='orange' value='orange' onChange={handleChange} />
        <label htmlFor="orange"> orange</label>
        <h2>Selected skills: {skill.toString()}</h2>
      </div>
    )
}

export default CheckBox;