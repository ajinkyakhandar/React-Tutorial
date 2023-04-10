import React, { useState } from 'react'

const ControlledComponent = () => {
    const [userData, setUserData] = useState({
        name:"",
        email:""
    })

    const getData = (e) => {
        setUserData({...userData,[e.target.name]:e.target.value})
    }
    const submitData = (e) => {
        e.preventDefault()
        console.log(userData)
    }
  return (
    <div>
        <form onSubmit={submitData}>
        <label>&nbsp;&nbsp;&nbsp; Controlled Component: </label>
        <input type="text" className='outline md:outline-1' name="name" placeholder='name' value={userData.name} onChange={getData}></input><br/>
        <input type="text" className='outline md:outline-1' name="email" placeholder='email' value={userData.email} onChange={getData}></input><br/>
        <button>Get Data...</button>
        </form>
    </div>
  )
}

export default ControlledComponent