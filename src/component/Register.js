import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { register } from "./action/userAction"
import { useNavigate } from "react-router-dom"
import Button from "react-bootstrap/esm/Button"


export default function Register(){
    const[inputs,setInputs]=useState({
        name:"",
        email:"",
        password:""
    })
   const navigate = useNavigate()
    const{isAuth}=useSelector(state=>state.userState)
    const dispatch = useDispatch()
    const handleInput=(e)=>{
        setInputs({...inputs,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        if(inputs.name==="",inputs.email===""||inputs.password===""){
            alert('all field are required')
        }else{
        dispatch(register(inputs))
        }
    }
    useEffect(()=>{
        if(isAuth){
            navigate('/login')
        }
    })
    return(
        <>
          <h2 className="title">Register</h2>
        <form className="forms" >
            <input type="name"
            name='name'
            value={inputs.name}
            placeholder='name'
            onChange={handleInput} 
            
            />
            
            
            <input type="email"
            name='email'
            value={inputs.email}
            placeholder='email'
            onChange={handleInput}
            
            />
            

            <input type="password"
            name='password'
            value={inputs.password}
            placeholder='password'
            onChange={handleInput}
            />
            <Button onClick={(e)=>handleSubmit(e)}>Register</Button>  
        </form>
        </>
    )
}