import { createSlice } from "@reduxjs/toolkit";

const cartItems = createSlice({
    name:'cart',
    initialState:{
        items:localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[],
        loading:false,
        shippingInfo:localStorage.getItem('shippingInfo')?JSON.parse(localStorage.getItem('shippingInfo')):{}
    },
    reducers:{
        appliedItemRequest(state,action){
            return{
                ...state,
                loading:true 
            }
        },
        appliedItemSuccess(state,action){
            
                const item = action.payload

                const isItemExit = state.items.find(i=>i.job == item.job)
    
                if(isItemExit){
                    state={
                        ...state,
                        loading:false
                    }
                }else{
                    state={
                        items:[...state.items,item],
                        loading:false
    
                    }
                    localStorage.setItem('cartItems',JSON.stringify(state.items))
                }
                return state
        }
    }
})

const{actions,reducer} = cartItems;
export const{appliedItemRequest,appliedItemSuccess}=actions
export default reducer