import React from 'react';
import styles from './styles.module.css';
import { FcSimCardChip } from "react-icons/fc";
import { HiWifi } from "react-icons/hi";
const IconBlock = () => {
    return (
        <div className={styles.IconBlock}>
             <div><FcSimCardChip/></div>
              <p><HiWifi/></p>
        </div>
    );
};

export default IconBlock;