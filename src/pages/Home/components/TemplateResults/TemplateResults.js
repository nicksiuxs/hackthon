import React from "react";
import useAppContext from "../../../../customHooks/useAppContext";

import ListOfTemplates from "../ListOfTemplates/ListOfTemplates";
import './TemplateResults.css';

const TemplateResults = () => {
  const { state: { labels } } = useAppContext()
  return (
    <div className="panel panel-50">
      <b>5. </b>{labels.choose_the_package}
      <div className="template-container">
        <ListOfTemplates />
      </div>
    </div>
  );
};

export default TemplateResults;
