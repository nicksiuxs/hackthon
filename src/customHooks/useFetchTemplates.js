import TYPES from '../reducers/types';

import fetchSalesforce from '../utils/callApi'
import useAppContext from './useAppContext';

const ENDPOINT = "/pos/v1/rentalTemplate";

const useFetchTemplates = () => {

    const { state: { filter }, dispatch } = useAppContext()
    const { category, dateSelected, startDate, endDate, capacity } = filter;
    const formatEndpoint = () => {
        return `${ENDPOINT}?category=${category}&startDate=${dateSelected + " " + startDate + ":00"}&endDate=${dateSelected + " " + endDate + ":00"}&capacity=${capacity}`
    }

    const fetchTemplates = async () => {
        try {
            dispatch({ type: TYPES.REQUEST_TEMPLATES })
            const data = await fetchSalesforce(formatEndpoint());
            dispatch({ type: TYPES.REQUEST_TEMPLATES_SUCCESS, payload: data })
        } catch (e) {
            dispatch({ action: TYPES.REQUEST_TEMPLATES_ERROR, payload: e })
        }
    }

    return { fetchTemplates }
}

export default useFetchTemplates