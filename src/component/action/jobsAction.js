import axios from 'axios'
import { jobsFailed, jobsRequest, jobsSuccess } from "../Slice/JobsSlice"

export const getJob=async (dispatch) => {
    try {
        dispatch(jobsRequest())
        const {data} = await axios.get(`https://jobportalbackend-l9ef.onrender.com/api/v1/jobs`) 
        dispatch(jobsSuccess(data))
        console.log(data)
    
    } catch (error) {
        dispatch(jobsFailed(error.response.data.message))
    }
}