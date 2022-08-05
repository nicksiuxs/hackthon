import labels from "../labels";
import TYPES from "./types";

const appInitialState = {
    filter: {
        category: "",
        date: "",
        startHour: "",
        endHour: "",
        capacity: 0
    },
    package: {},
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
            console.log(action)
            if (action.payload < 1) {
                return { ...state, step: 1 }
            }
            else if (action.payload > 3) {
                return { ...state, step: 3 }
            }
            return { ...state, step: action.payload }
        }
        default:
            return state;
    }
}

export { appInitialState };
export default appReducer;