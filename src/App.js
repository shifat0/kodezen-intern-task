import { createContext, useState } from "react";
import Main from "./Components/Main/Main";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./app.css";

export const typographyContext = createContext();

function App() {
  const [typography, setTypography] = useState({
    fontFamily: "",
    size: 50,
    weight: "",
    transform: "",
    style: "",
    decoration: "",
    lineHeight: 50,
    letterSpacing: 0,
    wordSpacing: 0,
  });

  return (
    <typographyContext.Provider value={[typography, setTypography]}>
      <div className="app">
        <Sidebar />
        <Main />
      </div>
    </typographyContext.Provider>
  );
}

export default App;
