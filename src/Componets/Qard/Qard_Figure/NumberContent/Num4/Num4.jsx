import React, {useContext, useMemo} from 'react';
import styles  from '../style.module.css'
import {UserQardContexts} from "../../../../../App";
const Num4 = () => {
    const NumberContext = useContext(UserQardContexts)
    const NumValue = NumberContext.qardValue.num
    const strCharAt = useMemo(()=>{
        return  NumValue
    },[NumValue])
    return (
        <div className={styles.Contexst}>
                <span>{strCharAt[12] ? strCharAt[12]:'-'}</span>
                <span>{strCharAt[13] ? strCharAt[13]:'-'}</span>
                <span>{strCharAt[14] ? strCharAt[14]:'-'}</span>
                <span>{strCharAt[15] ? strCharAt[15]:'-'}</span>
        </div>
    );
};

export default Num4;