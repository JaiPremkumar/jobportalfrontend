import axios from "axios"
import { loginFailed, loginRequest, loginSuccess, logOutFailed, logOutSuccess, logUserRequest, logUserSuccess, registerFailed, registerRequest, registerSuccess, updateUserFailed, updateUserRequest, updateUserSuccess } from "../Slice/userSlice"

export const register=(inputs)=>async (dispatch) => {
    try {
        dispatch(registerRequest())
        const {data} = await axios.post(`http://localhost:6001/api/v1/register`,inputs)
        dispatch(registerSuccess(data))
    } catch (error) {
        dispatch(registerFailed(error.message))
    }
    

}
export const login=(email,password)=>async (dispatch) => {
    try {
        dispatch(loginRequest())
        const {data} = await axios.post(`http://localhost:6001/api/v1/login`,{email,password})
        dispatch(loginSuccess(data))
        localStorage.setItem('token',JSON.stringify(data.token))
        localStorage.setItem('user',JSON.stringify(data.user))
    } catch (error) {
        dispatch(loginFailed(error.message))
    }
    

}

export const loadUser=async (dispatch) => {
    try {
        dispatch(logUserRequest())
        const {data} = await axios.get(`http://localhost:6001/api/v1/myDp/`)
        dispatch(logUserSuccess(data))
        
        localStorage.getItem('user',JSON.stringify(data.user))
    } catch (error) {
        dispatch(loginFailed(error.message))
    }
}

export const logOut =async (dispatch) => {
    try {
        
         await axios.post(`http://localhost:6001/api/v1/logout`)
        dispatch(logOutSuccess())
    } catch (error) {
        dispatch(logOutFailed(error.responce.data.message))
    }
    
}

export const updateProfile =(role)=>async (dispatch) => {
    try {
        dispatch(updateUserRequest())
        const {data} = await axios.put(`http://localhost:6001/api/v1/update`,role)
        dispatch(updateUserSuccess(data))
    } catch (error) {
        dispatch(updateUserFailed(error.responce.data.message))
    }
    
}