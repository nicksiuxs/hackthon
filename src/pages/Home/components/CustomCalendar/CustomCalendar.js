import React from 'react'
import Calendar from 'rsuite/Calendar';
import { days, months } from '../../../../utils/formatDates';
import "./CustomCalendar.css"

const CustomCalendar = ({ handleOnChangeCalendar }) => {

    const handleOnChange = (date) => {

        const newDate = `${date.getFullYear()}-${months[date.getMonth()]}-${days[date.getDate() - 1]}`
        handleOnChangeCalendar(newDate)
    }

    return (
        <Calendar bordered onSelect={handleOnChange} menuautowidth="true" />
    )
}

export default CustomCalendar                                                                                                           