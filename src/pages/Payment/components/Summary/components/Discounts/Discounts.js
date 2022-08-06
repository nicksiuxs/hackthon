import React from "react";
import useAppContext from "../../../../../../customHooks/useAppContext";
import "./Discounts.css";

const Discounts = () => {
  const {
    state: { labels },
  } = useAppContext();

  return (
    <div>
      <h2 className="title">{labels.add_discount}</h2>
      <form className="discount-form">
        <input type="text" placeholder={labels.discount_code} />
        <button className="btn -small">{labels.apply_code}</button>
      </form>
    </div>
  );
};

export default Discounts;
