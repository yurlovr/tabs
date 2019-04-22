import React, { Component } from "react";
import ShowTabsItem from "./ShowTabsItem";

export default class ShowTabs extends Component {
  constructor(props) {
    super(props);

    console.log(this.props);
    this.renderTabs = this.renderTabs.bind(this);
  }

  renderTabs() {
    return this.props.tabs.map(tab => {
      return (
        <li className="col-md-5 show-tabs-item" key={tab.id}>
          <ShowTabsItem tab={tab} />
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="show-tabs-listTabs">
        {this.renderTabs()}
      </ul>
    );
  }
}
