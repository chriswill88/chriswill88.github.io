import { createContext, useContext, useState } from "react";


const AppContext = createContext<any>(null);

const AppContextProvider = ({ children }: any) => {
    const [appState, setAppState] = useState('main');

    return <AppContext.Provider value={{appState: appState, setAppState: setAppState}}>
        {children}
    </AppContext.Provider>
}

const useAppContext = () => {
    // get the context
    const context = useContext(AppContext);
  
    // if `undefined`, throw an error
    if (context === undefined) {
      throw new Error("useUserContext was used outside of its Provider");
    }
  
    return context;
};


export {AppContext, AppContextProvider, useAppContext}