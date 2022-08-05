import labels from "../labels";

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
        default:
            return state;
    }
}

export { appInitialState };
export default appReducer;