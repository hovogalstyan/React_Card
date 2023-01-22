
import styles from './style.module.css'
import QardFigur from "./Qard_Figure/Qard_Figur";
import QardContest from "./Qard_Contest/QardContest";
const BankQards = () => {

    return (
        <div className={styles.Qard_Block}>
             <QardFigur/>
            <QardContest/>
        </div>
    );
};

export default BankQards;