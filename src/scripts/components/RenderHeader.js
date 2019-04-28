import React, { Component } from "react";
import DeclensionWorld from "./DeclensionWorld";

export default class RenderHeader extends Component {
  render() {
    if (!this.props.mainPage && !this.props.changePage) {
      return (
        <h3 className="main_header">
          Главная
          <span className="main_countTabs">
            У Вас
            {!!this.props.countTabs ? this.props.countTabs + " " : " нет "}
            {DeclensionWorld(this.props.countTabs)}.
          </span>
        </h3>
      );
    } else if (this.props.changePage) {
      return (
        <h3 className="main_header">
          <span
            onClick={() => this.props.goMain()}
            className="main_header_before required"
          >
            Главная
          </span>
          Изменить Закладку
          <span className="required"> поля обязательные для заполнения</span>
        </h3>
      );
    } else {
      return (
        <h3 className="main_header">
          <span
            onClick={() => this.props.goMain()}
            className="main_header_before required"
          >
            Главная
          </span>
          Создать Закладку
          <span className="required"> поля обязательные для заполнения</span>
        </h3>
      );
    }
  }
}
