import React from "react";
import useAppContext from "../../../../customHooks/useAppContext";
import { ReactComponent as Avatar } from "../../../../assets/avatar.svg";
import "./TemplateInformation.css";

const daysInWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const cardinals = ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"];
const formatDate = (startDate, endDate) => {
    // dates should not be falsy
  if (!startDate || !endDate) return "";

  let localeStartString = startDate.toLocaleTimeString('CO', {timeZone:'UTC',hour12:true,hour:'numeric',minute:'numeric'});
  let localeEndString = endDate.toLocaleTimeString('CO', {timeZone:'UTC',hour12:true,hour:'numeric',minute:'numeric'});
  return (
    daysInWeek[startDate.getDay()] +
    " " +
    monthNames[startDate.getMonth()] +
    " " +
    startDate.getDate() +
    cardinals[Number(startDate.getDate().toString().slice(-1))] +
    ", " +
    startDate.getFullYear() +
    " - " +
    localeStartString +
    " - " +
    localeEndString
  );
};

const TemplateInformation = () => {
  const {
    state: { labels, template },
  } = useAppContext();
  const {
    startDate,
    endDate,
    location : { capacity },
    cost,
    richDescription,
    disclaimers,
    insurance,
    img,
  } = template;
  return (
    <div className="panel panel-30">
      <figure className="template-image">
        <img src={img || "/no-photo.png"} alt="package information" />
      </figure>
      <h2 className="title">{labels.package_information}</h2>
      <p>
        <div className="address">Street 54-23</div>
        <div className="date">
          {formatDate(startDate, endDate) ||
            "Tuesday April 8th, 2022 - 8:00am - 9:00am"}{" "}
        </div>
        <div className="capacity">
          <Avatar />
          {labels.capacity + " " + capacity}
        </div>
      </p>
      <div>{labels.cost + ": $" + cost}</div>
      <p>
        <span className="section-title">{labels.description}</span>
        <div dangerouslySetInnerHTML={{ __html: richDescription }} />
      </p>
      <p>
        <span className="section-title">{labels.disclaimers}</span>
        {disclaimers}
      </p>
      <p>
        <span className="section-title">{labels.insurance_information}</span>
        {insurance}
      </p>
    </div>
  );
};

export default TemplateInformation;
