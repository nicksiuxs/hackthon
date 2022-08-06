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
    street,
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
      <h2>{labels.package_information}</h2>
      <p>
        <div>{street || "Street 54-23"}</div>
        <div>
          {formatDate(startDate, endDate) ||
            "Tuesday April 8th, 2022 - 8:00am - 9:00am"}{" "}
        </div>
        <div>
          <Avatar />
          {labels.capacity + " " + capacity}
        </div>
      </p>
      <h3>{labels.cost + ": " + cost}</h3>
      <p>
        <h3>{labels.description}</h3>
        <div dangerouslySetInnerHTML={{ __html: richDescription }} />
      </p>
      <p>
        <h3>{labels.disclaimers}</h3>
        {disclaimers}
      </p>
      <p>
        <h3>{labels.insurance_information}</h3>
        {insurance}
      </p>
    </div>
  );
};

export default TemplateInformation;
