import React from "react";
import useAppContext from "../../../../customHooks/useAppContext";

import ListOfTemplates from "../ListOfTemplates/ListOfTemplates";
import './TemplateResults.css';

const TemplateResults = () => {
  const { state: { labels,  } } = useAppContext()
  return (
    <div className="panel panel-50">
        <ListOfTemplates />
    </div>
  );
};

export default TemplateResults;
