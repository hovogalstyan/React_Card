
import styles from './style.module.css'
import AsideLeft from "./AsideLeft/AsideLeft";
import AsideRight from "./AsideRight/AsideRight";
import {useContext, useMemo} from "react";
import {UserQardContexts} from "../../../App";
const QardFigur = () => {
    const ActiveContexts = useContext(UserQardContexts)
 const active = useMemo(()=>{
      return ActiveContexts.active ? styles.active:''
 },[ActiveContexts.active])
    return (
        <div className={styles.Qard_Figure}>
            <div className={`${styles.Container} ${active}`}>
            <AsideLeft/>
            <AsideRight/>
            </div>
        </div>
    );
};

export default QardFigur;