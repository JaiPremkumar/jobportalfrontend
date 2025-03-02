import { createSlice } from "@reduxjs/toolkit";

const jobsSlice = createSlice({
    name:'applies',
    initialState:{
        loading:false,
    },
    reducers:{
        appliesRequest(state,action){
            return{
                loading:true
            }
        },
        appliesSuccess(state,action){
            return{
             loading:false,
             applies:action.payload.applies
            }
        },
        appliesFailed(state,action){
            return{
                loading:false,
                error:action.payload
                
            }
        }
      }
    })
    const {actions,reducer} =jobsSlice
    export const{appliesRequest,appliesSuccess,appliesFailed}=actions
    export default reducer