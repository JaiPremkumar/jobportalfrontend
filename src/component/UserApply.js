import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Card from 'react-bootstrap/Card';

export default function UserApply(){
    const{items} = useSelector(state=>state.cartState)
    const dispatch = useDispatch()
    const navigate = useNavigate()


   
      
    return(
        <>
         <div className='row justify-content-center aligen-item-center'> 
            {items&&items?.map((job,_id)=>( 
               <Card key={_id}>
      <Card.Header  className='text-light bg-dark'>Jobs</Card.Header>
      <Card.Body>
        <Card.Title>{job.name}</Card.Title>
        
         <h6>skills:{job.skills}</h6>
       

      </Card.Body>
    </Card>
        ))}
    </div>
        </>)
       
}