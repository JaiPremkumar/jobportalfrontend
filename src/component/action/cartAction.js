import axios from "axios"
import { appliedItemRequest, appliedItemSuccess } from "../Slice/cartSlice"


export const applyItem=(id)=>async (dispatch) => {
    try {
        dispatch(appliedItemRequest())
        const{data}=await axios.get(`http://localhost:6001/api/v1/job/${id}`)
        dispatch(appliedItemSuccess({
            job:data.job._id,
            name:data.job.name,
            salary:data.job.salary,
            vendor:data.job.vendor
            
        }))
    } catch (error) {
        
    }
    
}