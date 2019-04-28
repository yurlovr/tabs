import React from "react";
import ShowTegs from "../ShowTegs";

export default function TabItem(props) {
  return (
    <React.Fragment>
      <div>
        <h4>Теги:</h4>
        <div className="show-tabs_description show-tabs_tegs">
          <ShowTegs tegs={props.tab.tegs} show={true} />
        </div>
      </div>
      <div>
        <h4>Описание:</h4>
        <p className="show-tabs_description">
          {props.modal
            ? props.tab.descriptionTabs.length > 235
              ? props.tab.descriptionTabs.slice(0, 230) + " ..."
              : props.tab.descriptionTabs
            : props.tab.descriptionTabs}
        </p>
      </div>
      <p className="show-tabs_date">
        Дата добавления закладки: {props.tab.date}
      </p>
    </React.Fragment>
  );
}
