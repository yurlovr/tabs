import React, { PureComponent } from "react";
import ShowTabsItem from "./components/Tabs/ShowTabsItem";

export default class ShowTabs extends PureComponent {
  constructor(props) {
    super(props);

    this.renderTabs = this.renderTabs.bind(this);
  }

  renderTabs() {
    return this.props.tabs.map(tab => {
      return (
        <li className="row show-tabs-item" key={tab.id} tabIndex="0">

          <ShowTabsItem
            tab={tab}
            deleteTab={this.props.deleteTab}
            changeTab={this.props.changeTab}
          />

        </li>
      );
    });
  }

  render() {
    return (
      <ul className="show-tabs-listTabs container">{this.renderTabs()}</ul>
    );
  }
}
