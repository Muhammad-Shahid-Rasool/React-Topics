import React, { useState } from 'react'

const Fourm = () => {
 const [name,setName]=useState("");
 const [age,setAge]=useState("");
  
  
    return (
    <form action="">
        <label htmlFor="Name">Name:</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} /><br />
        <label htmlFor="Age">Age:</label>
        <input type="string" value={age} onChange={(e)=>setAge(e.target.value)} />
    </form>
  )
}

export default Fourm