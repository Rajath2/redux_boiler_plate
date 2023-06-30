import { INC_COUNTER, DEC_COUNTER, MUL_COUNTER,CLS_COUNTER } from "../../constants/actionTypes"


export const incrementCounter =()=>{
    return{
        type:INC_COUNTER
    }
}
export const decrementCounter =()=>{
    return{
        type:DEC_COUNTER
    }
}
export const mulCounter =()=>{
    return{
        type:MUL_COUNTER
    }
}
export const clsCounter =()=>{
    return{
        type:CLS_COUNTER
    }
}