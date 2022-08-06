import React from "react";
import Discounts from "./components/Discounts/Discounts";
import useAppContext from "../../../../customHooks/useAppContext";
import "./Summary.css";
import { formatDate, getTotalHours } from "../../../../utils/formatDates";

const Summary = () => {
  const {
    state: { labels, summary },
  } = useAppContext();

  const Totals = () => (
    <div className="totals">
      <div className="item">
        <span>{labels.subtotal}</span>
        <span>${summary.subtotal}</span>
      </div>
      <div className="item">
        <span>{labels.total}</span>
        <span>${summary.total}</span>
      </div>
    </div>
  );

  const RentalInfo = () => {
    const {
      template: { startDate, endDate, location, cost },
    } = summary;

    return (
      <div className="rental">
        <div className="date">
          <img src="/icons/calendar.svg" alt="calendar" />
          <p>{formatDate(startDate, endDate)}</p>
        </div>
        <div className="item">
          <span>Street 54</span>
        </div>
        <div className="item">
          <span>{getTotalHours(startDate, endDate)} Hour</span>
          <span>${cost}</span>
        </div>
        <div className="item">
          <span>{labels.capacity + " " + location.capacity}</span>
          <span>$0.0</span>
        </div>
      </div>
    );
  };

  return (
    <div className="panel panel-30 summary">
      <Discounts />
      <div className="summary">
        <h3 className="title">{labels.summary}</h3>
        <RentalInfo />
        <Totals />
      </div>
    </div>
  );
};

export default Summary;
