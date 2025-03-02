import { useState } from "react"

export default function SetProfile(){

     const[inputs,setInputs]=useState({
            college:"",
            education:"",
            domain:"",
            salary:""
        })
        const handleInput=(e)=>{
            setInputs({...inputs,[e.target.name]:e.target.value})
        }

    return(
    <>
     <h2 className="title">Register</h2>
        <form className="forms" >
            <input type="text"
            name='college'
            value={inputs.college}
            placeholder='college'
            onChange={handleInput} 
            
            />
            
            
            <input type="text"
            name='education'
            value={inputs.education}
            placeholder='education'
            onChange={handleInput}
            
            />
            

            <input type="text"
            name='domain'
            value={inputs.domain}
            placeholder='domai'
            onChange={handleInput}
            />

           <input type="text"
            name='salary'
            value={inputs.salary}
            placeholder='salary'
            onChange={handleInput}
            />
             
        </form>
    </>
    )
}