import React, {useContext} from 'react';
import styles from './style.module.css'
import SerevereCall from "./ServereCall/SerevereCall";
import CenterBlock from "./CenterBlock/CenterBlock";
import QardCode from "./QardCode/QardCode";
import BottomBlock from "./BottomBlock/BottomBlock";
const AsideLeft = () => {
    return (
        <div className={`${styles.AsideLeft}`}>
         <SerevereCall/>
            <CenterBlock/>
            <QardCode/>
            <BottomBlock/>
        </div>
    );
};

export default AsideLeft;