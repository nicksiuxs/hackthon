import labels from "../labels";
import TYPES from "./types";

const appInitialState = {
    filter: {
        category: "",
        dateSelected: "",
        startDate: "",
        endDate: "",
        capacity: 0
    },
    templates: {
        isFetching: false,
        listTemplates: [],
        error: null
    },
    template: {},
    step: 2,
    labels: labels,
    hostInformation: {
        firstName: "",
        lastName: "",
        email: "",
        homePhone: "",
        mobilePhone: ""
    },
    payment: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
        cardholderName: "",
        cardNumber: "",
        expDate: "",
        cvc: "",
        includeFee: false,
    },
    summary: {
        packageId: "",
        subtotal: 0,
        total: 0
    }
}

const appReducer = (state, action) => {
    switch (action.type) {
        case TYPES.CHANGE_STEP: {
            if (action.payload < 1) {
                return { ...state, step: 1 }
            }
            else if (action.payload > 3) {
                return { ...state, step: 3 }
            }
            return { ...state, step: action.payload }
        }
        case TYPES.REQUEST_TEMPLATES: {
            return { ...state, templates: { ...state.templates, isFetching: true } }
        }
        case TYPES.REQUEST_TEMPLATES_SUCCESS: {
            return { ...state, templates: { ...state.templates, isFetching: false, listTemplates: action.payload } }
        }
        case TYPES.REQUEST_TEMPLATES_ERROR: {
            return { ...state, templates: { ...state.templates, isFetching: false, error: action.payload } }
        }
        case TYPES.UPDATE_HOST_INFORMATION: {
            return { ...state, hostInformation: action.payload }
        }
        case TYPES.UPDATE_PAYMENT_INFORMATION: {
            return { ...state, payment: { ...state.payment, ...action.payload } }
        }
        default:
            return state;
    }
}

export { appInitialState };
export default appReducer;