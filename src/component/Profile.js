import { useEffect, useState } from "react"
import { Button, Card } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { loadUser } from "./action/userAction"
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { createJob } from "./action/jobAction"

export default function Profile(){
    const{isAuth,user,isLogin}=useSelector(state=>state.userState)
    const navigate = useNavigate()
    const dispatch = useDispatch()
   const[input,setInput]=useState({
          name:"",
          salary:"",
          description:"",
          domain:"",
          skills:"",
          vendor:"",
      })
  const handleInput=(e)=>{
    setInput({...input,[e.target.name]:e.target.value})
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);

   
  const handlecrt=()=>{
   dispatch(createJob(input))
  }
    return(
        <>
      
        {isLogin?
         ( <div >
            <Card style={{ width: '25rem', height:'25rem '}}> 
      <Card.Body>
        <Card.Title style={{fontSize:30,marginLeft:"0px"}}>NAME: {user.name}</Card.Title>
  
        <Card.Text style={{fontSize:30}}>
          Email: {user.email}
        </Card.Text>
        <Card.Text style={{fontSize:30}}>
         {user.role}
        </Card.Text>
        <Button onClick={(e)=>navigate('/editDp')}>update</Button>
      </Card.Body>
      </Card>
    </div>):<h1>empty</h1>}
    
       <Button variant="success" onClick={handleShow}>
        create
      </Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Application</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" >
              <Form.Control
                type="text"
                name='name'
                value={input.name}
                placeholder="name"
                onChange={handleInput}
                
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                value={input.salary}
                name="salary"
                placeholder="salary"
                onChange={handleInput}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                value={input.description}
                name="description"
                placeholder="description" 
                onChange={handleInput}
              
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                value={input.domain}
                name="domain"
                placeholder="domain"
                onChange={handleInput}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                value={input.skills}
                name="skills"
                placeholder="skills"
                onChange={handleInput}
                autoFocus
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                value={input.vendor}
                name="vendor"
                placeholder="company"
                onChange={handleInput}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handlecrt}>
            SumbitToApply
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}