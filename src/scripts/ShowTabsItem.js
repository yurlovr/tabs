import React, { Component } from "react";
import Button from "./components/Button";

export default class ShowTabsItem extends Component {


  render() {
    return (
      <section className="show-tabs">
        <h3>
          <a className="show-tabs_link" href={this.props.tab.linkTabs}>
            {this.props.tab.nameTabs}
          </a>
        </h3>
        <div className="show-tabs_buttons">
          <Button
            label="Изменить"
            onClick={() => console.log("нажал на изменить")}
            className="btn btn-outline-info"
          />
          <Button
            label="Удалить"
            onClick={() => console.log("нажал на Удалить")}
            className="btn btn-link"
          />
        </div>
        <div>
          <h4>Теги:</h4>
          <p className="show-tabs_description">Tegs</p>
        </div>
        <div>
          <h4>Описание:</h4>
          <p className="show-tabs_description">
            {this.props.tab.descriptionTabs}
          </p>
        </div>
        <p className="show-tabs_date">
          Дата добавления закладки: {this.props.tab.date}
        </p>
      </section>
    );
  }
}
