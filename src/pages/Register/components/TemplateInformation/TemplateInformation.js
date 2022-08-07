import React from "react";
import useAppContext from "../../../../customHooks/useAppContext";
import { ReactComponent as Avatar } from "../../../../assets/avatar.svg";
import "./TemplateInformation.css";
import { formatDate } from "../../../../utils/formatDates";

const TemplateInformation = () => {
  const {
    state: { labels, template },
  } = useAppContext();
  const {
    startDate,
    endDate,
    location: { capacity, name },
    cost,
    richDescription,
    disclaimers,
    insurance,
    img,
  } = template;
  return (
    <div className="panel panel-30">
      <figure className="template-image">
        <img src={img || "/default_image.png"} alt="package information" />
      </figure>
      <h2 className="title">{labels.package_information}</h2>
      <div>
        <div className="address">{name}</div>
        <div className="date">
          {formatDate(startDate, endDate) ||
            "Tuesday April 8th, 2022 - 8:00am - 9:00am"}{" "}
        </div>
        <div className="capacity">
          <Avatar />
          {labels.capacity + " " + capacity}
        </div>
      </div>
      <span className="cost">{labels.cost + ": $" + cost}</span>
      <div>
        <h3 className="section-title">{labels.description}</h3>
        <div dangerouslySetInnerHTML={{ __html: richDescription }} />
      </div>
      <div>
        <h3 className="section-title">{labels.disclaimers}</h3>
        {disclaimers}
      </div>
      <div>
        <h3 className="section-title">{labels.insurance_information}</h3>
        {insurance}
      </div>
    </div>
  );
};

export default TemplateInformation;
