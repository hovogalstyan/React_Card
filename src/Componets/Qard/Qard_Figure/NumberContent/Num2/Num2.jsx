import React from 'react';
import styles  from '../style.module.css'
import {UserQardContexts} from "../../../../../App";
import {useMemo,useContext} from "react";
const Num2 = () => {
    const NumberContext = useContext(UserQardContexts)
    const NumValue = NumberContext.qardValue.num
    const strCharAt = useMemo(()=>{
        return  NumValue
    },[NumValue])
    return (
        <div className={styles.Contexst}>
                <span>{strCharAt[4] ? strCharAt[4]:'-'}</span>
                <span>{strCharAt[5]? strCharAt[5]:'-'}</span>
                <span>{strCharAt[6]? strCharAt[6]:'-'}</span>
                <span>{strCharAt[7]? strCharAt[7]:'-'}</span>
        </div>
    );
};

export default Num2;