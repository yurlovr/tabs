import React from "react";
import DeclensionWorld from "./DeclensionWorld";

const RenderHeader = props => {
  if (!props.mainPage && !props.changePage ) {
    return (
      <h3 className="main_header">
        Главная{" "}
        <span className="main_countTabs">
          У Вас {!!props.countTabs ? props.countTabs +" " : " нет "}
          {DeclensionWorld(props.countTabs)}.
        </span>
      </h3>
    );
  } else if (props.changePage) {
    return <h3 className="main_header"> Изменить Закладку </h3>;
  } else {
    return <h3 className="main_header"> Создать Закладку <span className="required"> поля обязательные для заполнения</span>
    </h3>;
  }
};

export default RenderHeader;
