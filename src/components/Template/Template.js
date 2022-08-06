import React from "react";
import "./Template.css";
import labels from "../../labels";
import useAppContext from "../../customHooks/useAppContext";
import TYPES from "../../reducers/types";

const Template = (props) => {
  const { Id, timeFrame, capacity, price, description } = props;

  const { dispatch } = useAppContext();

  const handleSelectTemplate = () => {
    dispatch({ type: TYPES.SELECT_TEMPLATE, payload: Id });
  };

  return (
    <button className="template" onClick={handleSelectTemplate}>
      <figure className="image">
        <img src="/no-photo.png" alt="template img" />
      </figure>
      <div className="info">
        <div className="fields">
          <span>
            <b>{labels.time_frame} </b>
            {timeFrame}
          </span>
          <span>
            <b>{labels.capacity} </b>
            {capacity}&nbsp;people
          </span>
          <span>
            <b>{labels.price} </b>
            {price}
          </span>
        </div>
        <p dangerouslySetInnerHTML={{ __html: description }} className="description"></p>
      </div>
    </button>
  );
};

export default Template;
