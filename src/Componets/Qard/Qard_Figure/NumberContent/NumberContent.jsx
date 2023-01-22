import React from 'react';
import styles from './style.module.css';
import Num1 from "./Num1/Num1";
import Num2 from "./Num2/Num2";
import Num3 from "./Num3/Num3";
import Num4 from "./Num4/Num4";
const NumberContent = () => {
    return (
        <div className={styles.Num_Content}>
            <Num1/>
            <Num2/>
            <Num3/>
            <Num4/>
        </div>
    );
};

export default NumberContent;