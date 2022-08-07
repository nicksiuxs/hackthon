import React, { useEffect } from 'react'
import Calendar from 'rsuite/Calendar';
import { months } from '../../../../utils/formatDates';
import "./CustomCalendar.css"

const CustomCalendar = ({ value, handleOnChangeCalendar }) => {

    useEffect(() => {
        handleOnChange(new Date())
        // eslint-disable-next-line
    }, [])

    const handleOnChange = (date) => {
        const newDate = `${date.getFullYear()}-${months[date.getMonth()]}-${date.getDate()}`
        handleOnChangeCalendar(newDate)
    }

    const hanldeValue = (date) => {
        if (!date) {
            return new Date(Date.now())
        }
        let newDate = date;

        if (date.split("-")[2] > 9) {
            const arrDate = newDate.split("-")
            newDate = `${arrDate[0]}-${arrDate[1]}-${parseInt(arrDate[2]) + 1}`;
        }

        return new Date(newDate)
    }

    return (
        <Calendar compact bordered onSelect={handleOnChange} menuautowidth="true" value={hanldeValue(value)} />
    )
}

export default CustomCalendar                                                                                                           