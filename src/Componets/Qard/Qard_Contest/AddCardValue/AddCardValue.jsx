import React, {useCallback, useContext, useMemo, useReducer} from 'react';
import styles from './style.module.css';
import {UserQardContexts} from "../../../../App";
import reducer, {initialState} from "../../../../useReducerCard/reducer";
import {
    ACTIVE_CODE_CLASS,
    ACTIVE_MONTH_CLASS,
    ACTIVE_NUMBER_CLASS,
    ACTIVE_YEAR_CLASS,
} from "../../../../useReducerCard/action";
import { BsCreditCard2Front } from "react-icons/bs";
const AddCardValue = () => {
    const [state,dispatch] = useReducer(reducer,initialState)
     const toggleNumber =  useMemo(()=>{
         return state.inputNumberActive ? styles.active: styles.qardNumber
     },[state])
    const toggleMonth = useMemo(()=>{
        return state.inputMonthActive ? styles.activeMonht: ''
    },[state])
    const toggleYear = useMemo(()=>{
        return state.inputYearActive ? styles.activeYear:''
    },[state])
    const toggleCode = useMemo(()=>{
        return state.inputCodeActive ? styles.activeCode: ''
    },[state])
    const QardContexts = useContext(UserQardContexts);
     const numValue = useCallback((e)=>{
           if(!isNaN(e.target.value)){
               QardContexts.setQadValue({...QardContexts.qardValue,num: e.target.value})
           }
     },[QardContexts.qardValue]);
     const monthVal = useCallback((e)=>{
         if(!isNaN(e.target.value)){
             QardContexts.setQadValue({...QardContexts.qardValue,month: e.target.value})
         }
     },[QardContexts.qardValue]);
     const dayValue = useCallback((e)=>{
            if(!isNaN(e.target.value)){
            QardContexts.setQadValue({...QardContexts.qardValue, day: e.target.value})
            }
     },[QardContexts.qardValue]);
    const pinValue = useCallback((e)=>{
        if(!isNaN(e.target.value)){
            QardContexts.setQadValue({...QardContexts.qardValue, pinCode: e.target.value})
        }
    },[QardContexts.qardValue]);
 const numberActiveClick = useCallback(()=>{
     dispatch({type:ACTIVE_NUMBER_CLASS,payload:true})
 },[state]);
    const monthActive = useCallback(()=>{
        dispatch({type:ACTIVE_MONTH_CLASS,payload:true})
    },[state])
    const yearActive = useCallback(()=>{
        dispatch({type:ACTIVE_YEAR_CLASS,payload:true})
    },[state])
    const codeActive = useCallback(()=>{
        dispatch({type:ACTIVE_CODE_CLASS,payload:true})
    },[state])
    const cardLeft = useCallback(()=>{
       QardContexts.setActive(true)
    },[QardContexts.active])
    const cardRight = useCallback(()=>{
         QardContexts.setActive(false)
    },[QardContexts.active])
    return (
        <form className={styles.AddCardValue}>
             <div className={toggleNumber} onClick={numberActiveClick}>
                 <fieldset>
                     <legend>Qard Number</legend>
                 </fieldset>
                 <span><BsCreditCard2Front/></span>
                 <div>Card Number</div>
                 <input type="text"
                        value={QardContexts.qardValue.num}
                        onChange={e=> numValue(e)}
                        maxLength={16}
                 />
             </div>
            <div className={styles.Cont_row} >
                <div onClick={monthActive} className={toggleMonth}>
                    <fieldset>
                        <legend>Month</legend>
                    </fieldset>
                    <span>month</span>
                    <input type="text"
                           value={QardContexts.qardValue.month}
                           onChange={e=> monthVal(e)}
                           maxLength={2}
                    />
                </div>
                <div className={toggleYear} onClick={yearActive}>
                    <fieldset>
                        <legend>Year</legend>
                    </fieldset>
                    <span>Year</span>
                    <input type="text"
                           value={QardContexts.qardValue.day}
                           onChange={e=> dayValue(e)}
                           maxLength={2}
                    />
                </div>
                <div className={toggleCode} onClick={codeActive}>
                    <fieldset>
                        <legend>Code</legend>
                    </fieldset>
                    <span> Code</span>
                    <input type="text"
                           value={QardContexts.qardValue.pinCode}
                           onChange={e=> pinValue(e)}
                           onFocus={cardLeft}
                           onBlur={cardRight}
                           maxLength={3}

                    />
                </div>
            </div>
            <button><small>Order</small></button>
        </form>
    );
};

export default AddCardValue;