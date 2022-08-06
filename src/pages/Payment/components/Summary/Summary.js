import React from "react";
import Discounts from "./components/Discounts/Discounts";
import useAppContext from "../../../../customHooks/useAppContext";
import "./Summary.css";

const Summary = () => {
  const {
    state: { labels, summary },
  } = useAppContext();

  const Totals = () => (
    <div className="totals">
      <div className="item">
        <span>{labels.subtotal}</span>
        <span>{summary.subtotal}</span>
      </div>
      <div className="item">
        <span>{labels.total}</span>
        <span>{summary.total}</span>
      </div>
    </div>
  );

  const RentalInfo = () => (
    <div className="rental">
      <div className="date">
        <img src="/icons/calendar.svg" alt="calendar" />
        <p>Tuesday April 8th, 2022 - 7:00am - 8:00am</p>
      </div>
      <div className="item">
        <span className="address">Street 54</span>
      </div>
      <div className="item">
        <span>1 Hour</span>
        <span>$500.00</span>
      </div>
      <div className="item">
        <span>{labels.capacity} 30</span>
        <span>$0.0</span>
      </div>
    </div>
  )

  return (
    <div className="panel panel-30 summary">
      <Discounts />
      <div className="summary">
        <h3 className="title">{labels.summary}</h3>
        <RentalInfo />
        <Totals/>
      </div>
    </div>
  );
};

export default Summary;
