import React from 'react';
import styles from './style.module.css';
import {GrVisa} from "react-icons/gr";
const TopBlock = () => {

    return (
        <div className={styles.TopBlock}>
           <div>
                <p><GrVisa/></p>
               <h2>Scotiabank</h2>
           </div>
            <div>
                <h3>MOMENTUM</h3>
            </div>
        </div>
    );
};

export default TopBlock;