import { useState } from "react"
import { useDispatch } from "react-redux"
import { updateProfile } from "./action/userAction"
import { Button } from "react-bootstrap"

export default function EditRole(){
    const[role,setRole]=useState('vendor')
    const dispatch=useDispatch()

    const handleSubmit=(e)=>{
    dispatch(updateProfile(role))
    }
    return(
        <>
         <h2 className="title">UPDATE PROFILE</h2>
        <form className="forms" >
            <input type="name"
            name='name'
            value={role}
            placeholder='name'
            onChange={e=>setRole(e.target.value)} 
            
            />
            
            <Button onClick={(e)=>handleSubmit(e)}>Register</Button>
           
        </form>
        </>
    )
}