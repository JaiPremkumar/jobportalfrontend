import axios from "axios"
import { crtjobFailed, crtjobRequest, crtjobSuccess, jobFailed, jobRequest, jobSuccess } from "../Slice/JobSlice"

export const singleJob=(id)=>async (dispatch) => {
    try {
        dispatch(jobRequest())
        const {data} = await axios.get(`http://localhost:6001/api/v1/job/${id}`)
        dispatch(jobSuccess(data))
        console.log(data)
    } catch (error) {
        dispatch(jobFailed(error.response.data.message))
    }
}
export const createJob=(input)=>async (dispatch) => {
    try {
        dispatch(crtjobRequest())
        const {data}=await axios.post(`http://localhost:6001/api/v1/job/new`,input)
        dispatch(crtjobSuccess(data))
        console.log(data)
    } catch (error) {
        dispatch(crtjobFailed(error.message))
    }
}