import React from 'react';
import styles from './style.module.css';
import TopBlock from "./TopBlock/TopBlock";
import IconBlock from "./IconBlock/IconBlock";
import NumberContent from "../NumberContent/NumberContent";
import DataBlock from "./DataBlock/DataBlock";
import TopIcon from "./TopIcon/TopIcon";

const AsideRight = () => {
    return (
        <div className={styles.AsideRight}>
            <TopBlock/>
            <IconBlock/>
            <NumberContent/>
             <div className={styles.dta_container_service}>
              <DataBlock/>
               <TopIcon/>
             </div>
        </div>
    );
};

export default AsideRight;