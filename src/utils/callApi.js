const salesforceURL = 'https://data-customization-3965-dev-ed.my.salesforce.com/services/apexrest/Auctifera';
const accessToken = '00D54000000mEHk!AR0AQCndj5PLRIUGGFwDjLfCSh0q7ZR8Ut_7XEBvDeAvvzjxaf5HHNczNmUuDK_LDVcgFEiqgydi54FqAJR85a42wiywH0yK';

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
        }
    })
    return await response.json();
}

export default fetchSalesforce;