import React, { useReducer, createContext } from "react";

import appReducer, { appInitialState } from "../reducers/appReducer";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, appInitialState)

    return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}

export { AppContext };
export default AppProvider;