import React from "react";
import Template from "../../../../components/Template/Template";
import './TemplateResults.css';

const TemplateResults = () => {
  return (
    <div className="panel panel-50">
      <b>5. </b>Choose the package for you
      <div className="template-container">
        <Template
          timeFrame="8:00am to 9:00pm"
          capacity={30}
          price="$500"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus."
        />
      </div>
    </div>
  );
};

export default TemplateResults;
