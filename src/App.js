
import './App.css';
import {createContext, useState} from "react";

import BankQards from "./Componets/Qard/BankQards";
export const UserQardContexts = createContext();
function App() {
    const [active,setActive] = useState(false)
    const [qardValue, setQadValue]  = useState({id:Math.floor(Math.random()* 10000),num:'',month:'',day:"",pinCode:''})
    return (
    <div className="App">
        <UserQardContexts.Provider value={{
          qardValue,
          setQadValue,
          active,
          setActive,
        }}>
        <BankQards/>
        </UserQardContexts.Provider>
    </div>
  );
}

export default App;
