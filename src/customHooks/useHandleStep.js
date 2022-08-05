import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import TYPES from "../reducers/types";
import useAppContext from "./useAppContext";

const stepRouteMapping = [
    '/',
    '/register',
    '/payment'
]

const useHandleStep = ({ newStep, dispatch }) => {
    const navigate = useNavigate();
    const { state: { step } } = useAppContext()
    useEffect(() => {
        navigate(stepRouteMapping[step - 1]);
        // eslint-disable-next-line
    }, [step])

    const handleStep = () => {
        dispatch({ type: TYPES.CHANGE_STEP, payload: newStep })
    }

    return { handleStep }
}

export default useHandleStep