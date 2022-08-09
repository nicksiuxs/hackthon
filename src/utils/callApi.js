const salesforceURL = 'https://data-customization-3965-dev-ed.my.salesforce.com/services/apexrest/Auctifera';
const accessToken = '00D54000000mEHk!AR0AQJsRpZP114R0YUBBAANNBtSPuWEqxyJ9Psd9WtxsYtETFDSNULi9vSOQSV7xbSBNeHGdpTIhOPsxXueELbrBT5A_XmSC';

/**
 * fetchs data from Salesforce, require error handling
 * @param {string} endPoint 
 * @param {object} options fetch-like options
 * @returns 
 */
const fetchSalesforce = async (endPoint, options) => {
    const response = await fetch(salesforceURL + endPoint, {
        method: options?.method || 'GET',
        headers: {
            ...options?.headers,
            'Authorization': `Bearer ${accessToken}`
        },
        ...options
    })
    return await response.json();
}

export default fetchSalesforce;