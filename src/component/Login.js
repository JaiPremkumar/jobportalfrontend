import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadUser, login, register } from "./action/userAction"
import { Link, useNavigate, useParams } from "react-router-dom"
import Button from "react-bootstrap/esm/Button"


export default function Login(){

    const[email,setEmail]=useState()
    const[password,setPassword] = useState()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const{isLogin}=useSelector(state=>state.userState)
    const handleSubmit=()=>{
        if(email===""||password===""){
            alert('all field are required')
        }else{
        dispatch(login(email,password))
        }
    }
    const{id}=useParams()
    
    useEffect(()=>{
        if(isLogin){
            navigate('/jobs')
        }
       
    })
    return(
        <>
           <h2 className="title">LOGIN</h2>
        <form className="forms" >

            <input type="email"
            name='email'
            value={email}
            onChange={e=>setEmail(e.target.value)}
            placeholder='email'
            />
           
            <input type="password"
            name='password'
            value={password}
            onChange={e=>setPassword(e.target.value)}
            placeholder='password'
            />
           
           

            <Button onClick={handleSubmit} 
            
            >Login</Button>
            <Link to={'/'}><p>NewUser</p></Link>
              
        </form>
        
        </>
    )
}