import { createSlice } from '@reduxjs/toolkit'

const applySlice = createSlice({
    name:'apply',
    initialState:{
        loading:false,
        Applied:false,
        
    },
    reducers:{
        applyRequest(state,action){
            return{
                ...state,
                loading:true
            }   
        },
        applySuccess(state,action){
            return{
                loading:false,
                Applied:true,
                apply:action.payload.apply
            }   
        },
        applyFailed(state,action){
            return{
                ...state,
                error:action.payload
                
            }   
        },
    }
})

const{actions,reducer}=applySlice
export const{applyRequest,applySuccess,applyFailed}=actions;
export default reducer