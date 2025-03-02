import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { singleJob } from "./action/jobAction"
import { useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { applyItem } from "./action/cartAction";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Applies } from "./action/applyAction";



export default function JobDetails(){
    const{loading,job={}}=useSelector(state=>state.jobState)
  
   
    const dispatch = useDispatch()
    const{id} = useParams()
    const[input,setInput]=useState({
      name:"",
      email:"",
      education:"",
      jobsalary:job.salary,
      userID:"",
      jobID:job._id,
      jobname:job.name,
      jobdescription:job.description,
      jobvendor:job.vendor 
    })
    const handleInput=(e)=>{
      setInput({...input,[e.target.name]:e.target.value})
    }
    const [show, setShow] = useState(false);
    const navigate = useNavigate()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   
  const handleapply=()=>{
    dispatch(Applies(input))
    navigate('/jobs')

  }
    useEffect(()=>{
        dispatch(singleJob(id))
    },[])
    return(
        <>
         <div className='row justify-content-center aligen-item-center'> 
        
               <Card key={job._id}> 
      <Card.Header  className='text-light bg-dark'>Jobs</Card.Header>
      <Card.Body>
        <Card.Title>{job.name}</Card.Title>
         <Card.Subtitle className="mb-2">Salary-{job.salary}</Card.Subtitle>
         <h6>skills:{job.skills}</h6>
        <Card.Text>
          description: {job.description}
        </Card.Text>
        <h6>vaccacy: {job.vaccancy}</h6>
        <h6>Domain: {job.domain}</h6>
        <h6>company: {job.vendor}</h6>
        <Button variant="success" onClick={()=>dispatch(applyItem(job._id))}>Apply</Button>
        <Button variant="primary">Go Back</Button>
        <Button variant="success" onClick={handleShow}>
        Apply
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
                type="email"
                value={input.email}
                name="email"
                placeholder="name@example.com"
                onChange={handleInput}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                value={input.education}
                name="education"
                placeholder="Education" 
                onChange={handleInput}
              
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                value={input.jobsalary}
                name="jobsalary"
                placeholder="salary"
                onChange={handleInput}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                value={input.userID}
                name="userID"
                placeholder="userID"
                onChange={handleInput}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                value={input.jobID}
                name="jobID"
                placeholder="jobID"
                onChange={handleInput}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                value={input.jobname}
                name="jobname"
                placeholder="jobID"
                onChange={handleInput}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                value={input.jobdescription}
                name="jobdescription"
                placeholder="jobID"
                onChange={handleInput}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                value={input.jobvendor}
                name="jobvendor"
                placeholder="jobID"
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
          <Button variant="primary" onClick={handleapply}>
            SumbitToApply
          </Button>
        </Modal.Footer>
      </Modal>
      </Card.Body>
    </Card>
    </div>
        </>
    )
}