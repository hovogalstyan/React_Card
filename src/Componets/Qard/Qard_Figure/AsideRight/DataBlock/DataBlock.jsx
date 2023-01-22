import React, {useContext, useMemo} from 'react';
import styles from './style.module.css';
import {UserQardContexts} from "../../../../../App";
const DataBlock = () => {
    const textContexts = useContext(UserQardContexts)
    const dataMonhtCharAt = useMemo(()=>{
        return  textContexts.qardValue.month
    },[textContexts.qardValue.month])
    const dateDayCharAt = useMemo(()=>{
        return textContexts.qardValue.day
    },[textContexts.qardValue.day])
    return (
        <div className={styles.Data_Block}>
            <small>Expires</small>
            <div>
               <span>{dataMonhtCharAt[0]?dataMonhtCharAt[0]:'m'}</span>
               <span>{dataMonhtCharAt[1]?dataMonhtCharAt[1]:'m'}</span>
               <span>/</span>
               <span>{dateDayCharAt[0]? dateDayCharAt[0]:'y'}</span>
               <span>{dateDayCharAt[0]? dateDayCharAt[0]:'y'}</span>
            </div>
        </div>
    );
};

export default DataBlock;