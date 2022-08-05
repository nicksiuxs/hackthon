import TYPES from '../reducers/types';

import fetchSalesforce from '../utils/callApi'
import useAppContext from './useAppContext';

const ENDPOINT = "/pos/v1/rentalTemplate";

const useFetchTemplates = () => {

    const { dispatch } = useAppContext()

    const fetchTemplates = async () => {
        try {
            dispatch({ type: TYPES.REQUEST_TEMPLATES })
            const data = await fetchSalesforce(ENDPOINT);
            dispatch({ type: TYPES.REQUEST_TEMPLATES_SUCCESS, payload: data })
        } catch (e) {
            dispatch({ action: TYPES.REQUEST_TEMPLATES_ERROR, payload: e })
        }
    }

    return { fetchTemplates }
}

export default useFetchTemplates