import { createSlice } from "@reduxjs/toolkit";

const jobsSlice = createSlice({
    name:'jobs',
    initialState:{
        loading:false,
    },
    reducers:{
        jobsRequest(state,action){
            return{
                loading:true
            }
        },
        jobsSuccess(state,action){
            return{
             loading:false,
             jobs:action.payload.jobs
            }
        },
        jobsFailed(state,action){
            return{
                loading:false,
                error:action.payload
                
            }
        }
      }
    })
    const {actions,reducer} =jobsSlice
    export const{jobsRequest,jobsSuccess,jobsFailed}=actions
    export default reducer