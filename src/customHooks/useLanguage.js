import useAppContext from "./useAppContext"
// labels
import { labelsEnglish, labelsSpanish } from '../labels';
import TYPES from "../reducers/types";

export const useLanguage = () => {

  const { dispatch } = useAppContext();

  const setLanguage = (language) => {
    switch(language) {
        case ENGLISH: {
            dispatch({ type: TYPES.CHANGE_LANGUAGE, payload: labelsEnglish});
            break;
        }
        case SPANISH: {
            dispatch({ type: TYPES.CHANGE_LANGUAGE, payload: labelsSpanish});
            break;
        }
        default: {
            dispatch({ type: TYPES.CHANGE_LANGUAGE, payload: labelsEnglish});
            break;
        }
    }
  }
  return { setLanguage }
}

export const ENGLISH = 'ENGLISH';
export const SPANISH = 'SPANISH';
export default useLanguage