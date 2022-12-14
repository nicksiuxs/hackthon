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
    step: 1,
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
        error: null,
        isFetching: false,
        paid: false,
    },
    summary: {
        template: null,
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
            return { ...state, hostInformation: action.payload, step: 3 }
        }
        case TYPES.UPDATE_PAYMENT_INFORMATION: {
            return { ...state, payment: { ...state.payment, ...action.payload } }
        }
        case TYPES.UPDATE_FILTERS: {
            return { ...state, filter: { ...state.filter, ...action.payload } }
        }
        case TYPES.SELECT_TEMPLATE: {
            const idTemplate = action.payload
            const template = state.templates.listTemplates.find(template => template.Id === idTemplate)
            const newTotal = template.cost;
            return { ...state, template, step: 2, summary: { template, subtotal: newTotal, total: newTotal } }
        }
        case TYPES.PAY_RENTAL_EVENT: {
            return { ...state, payment: { ...state.payment, isFetching: true }}
        }
        case TYPES.PAY_RENTAL_EVENT_SUCCESS: {
            return { ...state, payment: { ...state.payment, isFetching: false, paid: true }}
        }
        case TYPES.PAY_RENTAL_EVENT_ERROR: {
            return { ...state, payment: { ...state.payment, error: action.payload, paid: false }}
        }
        case TYPES.RESET_STATE: {
            return appInitialState
        }
        case TYPES.CHANGE_LANGUAGE: {
            return { ...state, labels: action.payload }
        }
        default:
            return state;
    }
}

export { appInitialState };
export default appReducer;