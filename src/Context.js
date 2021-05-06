import React, { useContext, useState } from "react";
import data from "./data";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  
  const [ isFeatured, setIsFeatured ] = useState(false);
  const { latest, setLatest } = useState("");
  const { tools, setTools } = useState("");
  const [items,setItems ]= useState(data)

  return (
    <AppContext.Provider
      value={{isFeatured, setIsFeatured, latest, setLatest, setTools, tools,items,setItems}}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export { AppContext, AppProvider };
