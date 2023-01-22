import React, {useContext, useMemo} from 'react';
import styles  from '../style.module.css'
import {UserQardContexts} from "../../../../../App";
const Num3 = () => {
    const NumberContext = useContext(UserQardContexts)
    const NumValue = NumberContext.qardValue.num
    const strCharAt = useMemo(()=>{
        return  NumValue
    },[NumValue])
    return (
        <div className={styles.Contexst}>
                <span>{strCharAt[8]?strCharAt[8]:'-'}</span>
                <span>{strCharAt[9]?strCharAt[9]:'-'}</span>
                <span>{strCharAt[10]?strCharAt[10]:'-'}</span>
                <span>{strCharAt[11]?strCharAt[11]:'-'}</span>
        </div>
    );
};

export default Num3;