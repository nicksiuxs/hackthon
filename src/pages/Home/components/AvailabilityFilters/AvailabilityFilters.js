import React from 'react';
import Input from '../../../../components/Input/Input';
import Select from '../../../../components/Select/Select';
import useAppContext from '../../../../customHooks/useAppContext';
import TYPES from '../../../../reducers/types';
import "./AvailabilityFilters.css";
import useFetchTemplates from '../../../../customHooks/useFetchTemplates';

const AvailabilityFilters = () => {
  const { state: { labels, filter }, dispatch } = useAppContext();
  const { category, dateSelected, startDate, endDate, capacity } = filter;

  const handleOnChange = (e) => {
    const field = {
      [e.currentTarget.name]: e.currentTarget.value
    }
    dispatch({ type: TYPES.UPDATE_FILTERS, payload: field });
  }

  const { fetchTemplates } = useFetchTemplates()

  return (
    <div className='panel panel-50'>
      <div className='filter'>
        <label htmlFor="category"><b>1.</b> {labels.select_category}</label>
        <Select name="category" options={["Birthday Party", "Wedding", "Reception only"]} value={category} textDefault="Select category" handleOnChange={handleOnChange} />
      </div>
      <div className='filter'>
        <label htmlFor="dateSelected"><b>2.</b> {labels.select_date}</label>
        <input type="date" id="dateSelected" name="dateSelected" onChange={handleOnChange} value={dateSelected} />
      </div>
      <div className='filter'>
        <label htmlFor="startDate"><b>3.</b> {labels.select_time_frame}</label>
        <div>
          <input type="time" id="startDate" name="startDate" onChange={handleOnChange} value={startDate} />
          <span>to</span>
          <input type="time" id="endDate" name="endDate" onChange={handleOnChange} value={endDate} />
        </div>
      </div>
      <div className='filter'>
        <label htmlFor="capacity"><b>4.</b> {labels.number_of_guest}</label>
        <Input id={"capacity"} type="number" handleOnchange={handleOnChange} value={capacity} />
      </div>

      <button onClick={() => fetchTemplates()}>magic</button>

    </div>
  )
}

export default AvailabilityFilters