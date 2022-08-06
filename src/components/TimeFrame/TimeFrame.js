import React from "react";
import "./TimeFrame.css";

const TimeFrame = (props) => {
  const { startDate, endDate, onChange } = props;
  return (
    <div className="timeframe">
      <input
        type="time"
        id="startDate"
        name="startDate"
        onChange={onChange}
        value={startDate}
      />
      <span>to</span>
      <input
        type="time"
        id="endDate"
        name="endDate"
        onChange={onChange}
        value={endDate}
      />
    </div>
  );
};

export default TimeFrame;
