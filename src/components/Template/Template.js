import React from "react";
import "./Template.css";
import labels from "../../labels";
import useAppContext from "../../customHooks/useAppContext";
import TYPES from "../../reducers/types";

const Template = (props) => {
  const { Id, timeFrame, capacity, price, description } = props;

  const { dispatch } = useAppContext()

  const handleSelectTemplate = () => {
    dispatch({ type: TYPES.SELECT_TEMPLATE, payload: Id })
  }

  return (
    <button className="template" onClick={handleSelectTemplate}>
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
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>
    </button>
  );
};

export default Template;
