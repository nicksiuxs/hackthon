import React from "react";
import "./Template.css";
import labels from "../../labels";

const Template = (props) => {
  const { timeFrame, capacity, price, description } = props;
  return (
    <div className="template">
      <div className="image">
        <img src="/no-photo.png" alt="template img" />
      </div>
      <div className="info">
        <p>
          <b>{labels.time_frame} </b>
          {timeFrame}
        </p>
        <p>
          <b>{labels.capacity} </b>
          {capacity}&nbsp;people
        </p>
        <p>
          <b>{labels.price} </b>
          {price}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Template;
