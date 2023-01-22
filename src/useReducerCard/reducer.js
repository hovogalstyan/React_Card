import {
    ACTIVE_CODE_CLASS,
    ACTIVE_MONTH_CLASS,
    ACTIVE_NUMBER_CLASS,
    ACTIVE_YEAR_CLASS,
} from "./action";

export const  initialState = {
         inputNumberActive: false,
         inputMonthActive :false,
         inputYearActive:false,
         inputCodeActive:false,
         cardLeft:false,
}
export default function reducer(state,action){
    switch (action.type){
        case ACTIVE_NUMBER_CLASS:{
           return {
               ...state,
            inputNumberActive: state.inputNumberActive = action.payload
           }
        }
        case ACTIVE_MONTH_CLASS:{
            return {
                ...state,
                inputMonthActive: state.inputMonthActive = action.payload
            }
        }
        case ACTIVE_YEAR_CLASS:{
            return {
                ...state,
                inputYearActive: state.inputYearActive = action.payload
            }
        }
        case ACTIVE_CODE_CLASS:{
            return {
                ...state,
                inputCodeActive: state.inputCodeActive = action.payload
            }
        }

        default:
           return  state
    }
}