import React, { useState, useContext, createContext } from "react";

const AppContext = createContext();

const useAppContext = () => {
    return useContext(AppContext);
}

const AppProvider = ({ children }) => {
    const [step, setStep] = useState(1);

    // esta funcion se puede cambiar
    const handleStep = (newStep) => {
        if (newStep < 1) {
            return setStep(1)
        }
        if (newStep > 3) {
            return setStep(3)
        }
        setStep(newStep)
    }

    return <AppContext.Provider value={{ step, handleStep }}>{children}</AppContext.Provider>
}

export { AppContext, useAppContext };
export default AppProvider;