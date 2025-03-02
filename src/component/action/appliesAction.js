import axios from 'axios'
import { appliesFailed, appliesRequest, appliesSuccess } from '../Slice/AppliesSlice'


export const getApplies=async (dispatch) => {
    try {
        dispatch(appliesRequest())
        const {data} = await axios.get(`https://jobportalbackend-l9ef.onrender.com/api/v1/applies`) 
        dispatch(appliesSuccess(data))
        console.log(data)
    
    } catch (error) {
        dispatch(appliesFailed(error.response.data.message))
    }
}