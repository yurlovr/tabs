import React, { Component } from "react";
import TabItem from "./TabItem";

export default class ModalWin extends Component {
  constructor(props) {
    super(props);

    this.okButtonClick = this.okButtonClick.bind(this);
  }

  okButtonClick() {
    this.props.okButton(this.props.tab.id);
  }

  render() {
    return (
      <div className="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{this.props.title}</h5>
              <button
                type="button"
                className="close"
                onClick={this.props.cancelButton}
              >
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <section className="modal-section">
                <h3 className="modal-section-header">
                    {this.props.tab.nameTabs}
                </h3>
                <TabItem tab={this.props.tab}
                         modal={true} />
              </section>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={this.props.cancelButton}
              >
                {this.props.cancelButtonTitle}
              </button>
              <button
                type="button"
                className={`btn ${this.props.delete ? "btn-warning" : "btn-primary"}`}
                onClick={this.okButtonClick}
              >
                {this.props.okButtonTitle}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
