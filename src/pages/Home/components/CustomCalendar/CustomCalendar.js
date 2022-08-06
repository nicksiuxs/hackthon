import React, { useEffect } from 'react'
import Calendar from 'rsuite/Calendar';
import { days, months } from '../../../../utils/formatDates';
import "./CustomCalendar.css"

const CustomCalendar = ({ value, handleOnChangeCalendar }) => {

    useEffect(() => {
        handleOnChange(new Date())
        // eslint-disable-next-line
    }, [])

    const handleOnChange = (date) => {
        const newDate = `${date.getFullYear()}-${months[date.getMonth()]}-${days[date.getDate() - 1]}`
        handleOnChangeCalendar(newDate)
    }

    const hanldeValue = (date) => {
        if (!date) {
            return new Date(Date.now())
        }
        return new Date(date)
    }

    return (
        <Calendar compact bordered onSelect={handleOnChange} menuautowidth="true" value={hanldeValue(value)} />
    )
}

export default CustomCalendar                                                                                                           