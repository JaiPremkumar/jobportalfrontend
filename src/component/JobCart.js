import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getJob } from "./action/jobsAction"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


export default function JobCart(){

    const{loading, error, jobs} = useSelector((state)=>state.jobsState)
    const dispatch = useDispatch()
  

    useEffect(()=>{
        dispatch(getJob) 
    },[])
    return(
        <>
         <div className='row justify-content-center aligen-item-center'> 
            {jobs&&jobs?.map((job,_id)=>( 
               <Card key={_id}>
      <Card.Header  className='text-light bg-dark'>Jobs</Card.Header>
      <Card.Body>
        <Card.Title>{job.name}</Card.Title>
        
         <h6>skills:{job.skills}</h6>
       
        <Link to={`/job/${job._id}`}><Button variant="primary">see more</Button></Link>
      </Card.Body>
    </Card>
        ))}
    </div>
        </>
    )}