import React, { useEffect } from 'react'
import Calendar from 'rsuite/Calendar';
import { days, months } from '../../../../utils/formatDates';
import "./CustomCalendar.css"

const CustomCalendar = ({ handleOnChangeCalendar }) => {

    useEffect(() => {
        handleOnChange(new Date())
    }, [])

    const handleOnChange = (date) => {
        const newDate = `${date.getFullYear()}-${months[date.getMonth()]}-${days[date.getDate() - 1]}`
        handleOnChangeCalendar(newDate)
    }

    return (
        <Calendar compact bordered onSelect={handleOnChange} menuautowidth="true" />
    )
}

export default CustomCalendar                                                                                                           