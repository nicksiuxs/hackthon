import React from 'react'
import Template from '../../../../components/Template/Template'
import useAppContext from '../../../../customHooks/useAppContext'

const ListOfTemplates = () => {
    const { state: { templates } } = useAppContext()
    const { listTemplates } = templates;

    const formatDate = (startDate, endDate) => {
        return `${startDate.getHours()}:${startDate.getMinutes()} to ${endDate.getHours()}:${endDate.getMinutes()}`;
    }

    return (
        <>
            {
                listTemplates.map(template => {
                    const { Id, cost, richDescription, location, startDate, endDate } = template;
                    return <Template
                        key={Id}
                        Id={Id}
                        timeFrame={formatDate(startDate, endDate)}
                        capacity={location.capacity}
                        price={cost}
                        description={richDescription}
                    />
                })
            }
        </>
    )
}

export default ListOfTemplates