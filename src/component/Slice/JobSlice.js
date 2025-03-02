import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name:'job',
    initialState:{
        loading:false,
        job:{}
    },
    reducers:{
        jobRequest(state,action){
            return{
                loading:true
            }
        },
        jobSuccess(state,action){
            return{
                loading:false,
                job:action.payload.job
            }
        },
        jobFailed(state,action){
            return{
                loading:false,
                error:action.payload
            }
        },
        crtjobRequest(state,action){
            return{
                loading:true
            }
        },
        crtjobSuccess(state,action){
            return{
                loading:false,
                job:action.payload.job
            }
        },
        crtjobFailed(state,action){
            return{
                loading:false,
                error:action.payload
            }
        }
    }
})

const{actions,reducer} = jobSlice
export const{jobRequest,jobSuccess,jobFailed,crtjobRequest,crtjobSuccess,crtjobFailed}=actions;
export default reducer