import TYPES from "../reducers/types";
import fetchSalesforce from "../utils/callApi";
import useAppContext from "./useAppContext";

const ENDPOINT = "/pos/v1/rentalTemplate";

const usePayRental = () => {
    const { state: { hostInformation, payment, template }, dispatch } = useAppContext();

    const buildRequestBody = () => {
        const hostContact = {
            FirstName: hostInformation.firstName,
            LastName: hostInformation.lastName,
            Email: hostInformation.email,
            HomePhone: hostInformation.homePhone,
            Phone: hostInformation.mobilePhone
        };
        const buyerContact = {
            FirstName: payment.firstName,
            LastName: payment.lastName,
            Email: payment.email,
            Phone: payment.phone,
            MailingStreet: payment.address,
            MailingCity: payment.city,
            MailingState: payment.MailingState,
            MailingCountry: payment.country,
            MailingPostalCode: payment.zipCode
        }
        return {
            rentalTemplateId: template.Id,
            hostContact,
            buyerContact,
        }
    }

    const doPayment = async () => {
        try {
            dispatch({ type: TYPES.PAY_RENTAL_EVENT });
            const body = buildRequestBody();
            
            await fetchSalesforce(ENDPOINT, {
                method: 'POST',
                body: JSON.stringify(body)
            })
            dispatch({ type: TYPES.PAY_RENTAL_EVENT_SUCCESS})
        } catch (e) {
            dispatch({ type: TYPES.PAY_RENTAL_EVENT_ERROR, payload: e})
        }
    }
    return { doPayment }
}

export default usePayRental