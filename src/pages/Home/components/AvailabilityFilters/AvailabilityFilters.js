import React, { useState } from 'react';
import Input from '../../../../components/Input/Input';
import Select from '../../../../components/Select/Select';
import useAppContext from '../../../../customHooks/useAppContext';
import TYPES from '../../../../reducers/types';
import "./AvailabilityFilters.css";
import useFetchTemplates from '../../../../customHooks/useFetchTemplates';
import CustomCalendar from '../CustomCalendar/CustomCalendar';
import TimeFrame from '../../../../components/TimeFrame/TimeFrame';

const AvailabilityFilters = () => {
  const { state: { labels, filter }, dispatch } = useAppContext();
  const { category, dateSelected, startDate, endDate, capacity } = filter;
  const [isValidate, setIsValidate] = useState(true)
  const handleOnChange = (e) => {
    const field = {
      [e.currentTarget.name]: e.currentTarget.value
    }
    dispatch({ type: TYPES.UPDATE_FILTERS, payload: field });
  }

  const handleOnChangeCalendar = (dateSelected) => {
    dispatch({ type: TYPES.UPDATE_FILTERS, payload: { dateSelected } });
  }

  const { fetchTemplates } = useFetchTemplates()

  const handleOnSubmit = (e) => {
    e.preventDefault()
    if (category !== "" && dateSelected !== "" && startDate !== "" && endDate !== "" && capacity >= 0) {
      setIsValidate(true);
      fetchTemplates();
    } else {
      setIsValidate(false);
    }
  }

  return (
    <form className='panel panel-50' onSubmit={handleOnSubmit}>
      <div className='filter'>
        <label htmlFor="category"><b>1.</b> {labels.select_category}</label>
        <Select name="category" options={["Birthday Party", "Wedding", "Reception only"]} value={category} textDefault="Select category" handleOnChange={handleOnChange} required />
        {!isValidate && category === "" ? <span className="error-message">{labels.error_select_category}</span> : null}
      </div>
      <div className='filter'>
        <label htmlFor="dateSelected"><b>2.</b> {labels.select_date}</label>
        <CustomCalendar value={dateSelected} handleOnChangeCalendar={handleOnChangeCalendar} />
        {!isValidate && dateSelected === "" ? <span className="error-message">{labels.error_select_date}</span> : null}
      </div>
      <div className='filter'>
        <label htmlFor="startDate"><b>3.</b> {labels.select_time_frame}</label>
        <TimeFrame onChange={handleOnChange} startDate={startDate} endDate={endDate} />
        {!isValidate && startDate <= endDate ? <span className="error-message">{labels.error_time_range}</span> : null}
      </div>
      <div className='filter'>
        <label htmlFor="capacity"><b>4.</b> {labels.number_of_guest}</label>
        <Input id={"capacity"} type="number" handleOnchange={handleOnChange} value={capacity} minValue={0} />
        {!isValidate && capacity >= 0 ? <span className="error-message">{labels.error_capacity}</span> : null}
      </div>

      <button className="btn">{labels.search}</button>
    </form>
  )
}

export default AvailabilityFilters