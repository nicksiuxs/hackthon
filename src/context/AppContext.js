import React, { useState, useEffect, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

const useAppContext = () => {
    return useContext(AppContext);
}

const stepRouteMapping = [
    '/',
    '/payment',
    '/register'
]

const AppProvider = ({ children }) => {
    const [step, setStep] = useState(1);
    // navigation handler
    const navigate = useNavigate();

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

    useEffect(() => {
      navigate(stepRouteMapping[step - 1]);
    }, [step])
    

    return <AppContext.Provider value={{ step, handleStep }}>{children}</AppContext.Provider>
}

export { AppContext, useAppContext };
export default AppProvider;