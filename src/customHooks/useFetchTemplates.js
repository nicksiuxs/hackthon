import TYPES from '../reducers/types';

import fetchSalesforce from '../utils/callApi'
import useAppContext from './useAppContext';

const ENDPOINT = "/pos/v1/rentalPackage";

const useFetchTemplates = () => {

    const { dispatch } = useAppContext()

    const fetchTemplates = async () => {
        try {
            dispatch({ action: TYPES.REQUEST_TEMPLATES })
            const data = await fetchSalesforce(ENDPOINT);
            dispatch({ action: TYPES.REQUEST_TEMPLATES_SUCCESS, payload: data })
        } catch (e) {
            dispatch({ action: TYPES.REQUEST_TEMPLATES_ERROR, payload: e })
        }
    }

    return { fetchTemplates }
}

export default useFetchTemplates