import React from "react";
import Template from "../../../../components/Template/Template";
import useAppContext from "../../../../customHooks/useAppContext";
import "./ListOfTemplates.css";
import Spinner from "../../../../components/Spinner/Spinner";

const ListOfTemplates = () => {
  const {
    state: { templates, labels },
  } = useAppContext();
  const { listTemplates, isFetching, error } = templates;

  const formatDate = (startDate, endDate) => {
    return `${startDate.getHours()}:${startDate.getMinutes()} to ${endDate.getHours()}:${endDate.getMinutes()}`;
  };

  const EmptyFormMessage = () => (
    <div className="message-container">
      <span className="message -info">{labels.packages_will_be_available}</span>
    </div>
  );

  const ErrorMessage = () => (
    <div className="message-container">
      <span className="message -error">{error.message}</span>
    </div>
  );

  return (
    <div className="panel panel-50">
      {isFetching ? (
        <Spinner />
      ) : 
      !!error ? (
        <ErrorMessage />
      ): (
        <>
          <b>5. </b> {labels.choose_the_package}
          {
            listTemplates.length > 0 ? 
            listTemplates.map((template) => {
              const { Id, cost, description, location, startDate, endDate } =
                template;
              return (
                <Template
                  key={Id}
                  Id={Id}
                  timeFrame={formatDate(startDate, endDate)}
                  capacity={location.capacity}
                  price={cost}
                  description={description}
                />
              );
            }) : (
              <EmptyFormMessage />
            )
          }
        </>
      )}
    </div>
  );
};

export default ListOfTemplates;
