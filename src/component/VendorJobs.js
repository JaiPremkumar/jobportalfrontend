import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getApplies } from "./action/appliesAction"
import { Card } from "react-bootstrap"

export default function VendorJobs(){

    const{applies}=useSelector(state=>state.appliesState)
    const dispatch = useDispatch()

    
    return(
        <>
          <Card >
      <Card.Header  className='text-light bg-dark'>Jobs</Card.Header>
      <Card.Body>
        {applies&&applies.map(applies=>(
            <>
        <Card.Title>{applies.name}</Card.Title>
         <h6>skills:{applies.email}</h6>
         </>))}
      </Card.Body>
    </Card>
        </>
    )
}