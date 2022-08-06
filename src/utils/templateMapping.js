/**
 * Transforms a rental template from salesforce to the schema defined for frontend
 * @param {salesforceRentalTemplate} sObject 
 */
const templateMapping = (sObject) => {
    let sfLocation = sObject.location;
    let sfRentalEvent = sObject.rentalEvent;

    const rentalTemplate = {
        Id: sfRentalEvent.Id,
        category: sfRentalEvent.Auctifera__Rental_Type__c,
        cost: sfRentalEvent.Auctifera__Minimum_Deposit_Amount__c,
        richDescription: sfRentalEvent.Auctifera__Online_Description__c,
        description: sfRentalEvent.Auctifera__Description__c,
        location: {
            Id: sfLocation.Id,
            capacity: sfLocation.Auctifera__Capacity__c
        },
        startDate: new Date(sObject.rentalStartDate),
        endDate: new Date(sObject.rentalEndDate),
    }
    return rentalTemplate;
}

/**
 * Transforms a list of rental templates from salesforce to a array of template objectes, following the schema defined for frontend
 * * @param {Array<salesforceRentalTemplate>} sObjects 
 */
const templateMappingArray = (sObjects) => {
    return sObjects.map(templateMapping);
}

export {templateMappingArray};
export default templateMapping;