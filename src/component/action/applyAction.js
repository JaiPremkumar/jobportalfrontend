import axios from "axios"
import { applyFailed, applyRequest, applySuccess } from "../Slice/ApplySlice"

export const Applies=(input)=>async (dispatch) => {
    try {
        dispatch(applyRequest())
        const {data}=await axios.post(`https://jobportalbackend-l9ef.onrender.com/api/v1/apply/new`,input)
        dispatch(applySuccess(data))
        console.log(data)
    } catch (error) {
        dispatch(applyFailed(error.message))
    }
}