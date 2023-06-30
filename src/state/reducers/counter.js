import { DEC_COUNTER, INC_COUNTER, MUL_COUNTER,CLS_COUNTER  } from "../../constants/actionTypes";

const INITIAL_STATE=1;

const counterReducer =(state = INITIAL_STATE,action)=>{
    switch(action.type){
        case INC_COUNTER:
            return ++state;
        case DEC_COUNTER:
            return --state;
        case MUL_COUNTER:
           // state = INITIAL_STATE * 2
            return state * 2;
        case CLS_COUNTER:
            return state = 0;
        default:
            return state;
    }
}
export default counterReducer;