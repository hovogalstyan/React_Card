import React, {useContext, useMemo} from 'react';
import styles from './style.module.css'
import {UserQardContexts} from "../../../../../App";

const QardCode = () => {
  const CodeContexts = useContext(UserQardContexts)
    const strCharat = useMemo(()=>{
        return CodeContexts.qardValue.pinCode
    },[CodeContexts.qardValue])
    return (
        <div className={styles.Container_Card}>
        <div className={styles.CardCoe}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
            <div>
                <p>{strCharat[0]?strCharat[0]:'*'}</p>
                <p>{strCharat[1]?strCharat[1]:'*'}</p>
                <p>{strCharat[2]?strCharat[2]:'*'}</p>
            </div>
        </div>
    );
};

export default QardCode;