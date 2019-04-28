import React, { Component } from "react";
import Button from "../form/Button";
import ModalWin from "../modalWindow/ModalWin";
import TabItem from "./TabItem";

export default class ShowTabsItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalDelete: false
    };

    this.showModalWindow = this.showModalWindow.bind(this);
  }

  showModalWindow() {
    this.setState({ modalDelete: true });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.modalDelete && (
          <ModalWin
            title="Удалить Закладку?"
            tab={this.props.tab}
            okButton={this.props.deleteTab}
            cancelButton={() => this.setState({ modalDelete: false })}
            cancelButtonTitle="Отменить"
            okButtonTitle="Удалить"
            delete={true}
          />
        )}

        <section className="show-tabs">
          <h3>
            <a className="show-tabs_link" href={this.props.tab.linkTabs} target="_blank" rel="noopener noreferrer">
              {this.props.tab.nameTabs}
            </a>
          </h3>
          <div className="show-tabs_buttons">
            <Button
              label="Изменить"
              onClick={() => this.props.changeTab(this.props.tab.id)}
              className="btn btn-outline-info"
            />

            <Button
              label="Удалить"
              className="btn btn-link"
              onClick={this.showModalWindow}
            />
          </div>

          <TabItem tab={this.props.tab} />
        </section>
      </React.Fragment>
    );
  }
}
