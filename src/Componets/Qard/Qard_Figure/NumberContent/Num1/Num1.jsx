import React, {useContext, useMemo} from 'react';
import styles  from '../style.module.css'
import {UserQardContexts} from "../../../../../App";
const Num1 = () => {
     const NumberContext = useContext(UserQardContexts)
     const NumValue = NumberContext.qardValue.num
     const strCharAt = useMemo(()=>{
         return  NumValue
     },[NumValue])
    return (
        <div className={styles.Contexst}>
            <span>{strCharAt[0] ? strCharAt[0]:'-'}</span>
            <span>{strCharAt[1] ? strCharAt[1]:'-'}</span>
            <span>{strCharAt[2] ? strCharAt[2]:'-'}</span>
            <span>{strCharAt[3] ? strCharAt[3]:'-'}</span>
        </div>
    );
};

export default Num1;