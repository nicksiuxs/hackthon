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
    const { state: { step, template } } = useAppContext()
    useEffect(() => {
        navigate(stepRouteMapping[step - 1]);
        // eslint-disable-next-line
    }, [step])

    const handleStep = () => {
        if (!couldMoveTo()) return;

        dispatch({ type: TYPES.CHANGE_STEP, payload: newStep })
    }

    const couldMoveTo = () => {
        if (newStep === 2 && Object.keys(template).length === 0) {
            return false;
        }
        if (newStep === 3 && Object.keys(template).length === 0) {
            return false;
        }
        return true;
    }

    return { handleStep, couldMoveTo: couldMoveTo() }
}

export default useHandleStep