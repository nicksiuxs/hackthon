import React from 'react';

import useAppContext from '../../../../customHooks/useAppContext'

import { ReactComponent as Avatar } from '../../../../assets/avatar.svg';

import "./TemplateInformation.css";

const TemplateInformation = () => {
    const { state: { labels, template } } = useAppContext();
    const { street, date, capacity, cost, description, disclaimers, insurance, img } = template;
    return (
        <div className="panel panel-30">
            <figure className='template-image'>
                <img src={img || "/no-photo.png"} alt="package information" />
            </figure>
            <h2>{labels.package_information}</h2>
            <p>
                <div>{street || "Street 54-23"}</div>
                <div>{date || "Tuesday April 8th, 2022 - 8:00am - 9:00am"} </div>
                <div>
                    <Avatar />
                    {labels.capacity + " " + capacity}
                </div>
            </p>
            <h3>{labels.cost + ": " + cost}</h3>
            <p>
                <h3>{labels.description}</h3>
                {description}
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
    )
}

export default TemplateInformation