import labels from "../labels";
import TYPES from "./types";

const appInitialState = {
    filter: {
        category: "",
        dateSelected: "",
        startHour: "",
        endHour: "",
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
    host_information: {
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
        thanks: false,
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
        default:
            return state;
    }
}

export { appInitialState };
export default appReducer;