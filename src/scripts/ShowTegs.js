import React, { Component } from "react";
import TegItem from "./components/TegItem";

export default class ShowTegs extends Component {
  constructor(props) {
    super(props);

    this.renderTegs = this.renderTegs.bind(this);
  }
  renderTegs() {
    return this.props.tegs.map(teg => {
      return (
        <li key={teg.name}>
          <TegItem
            name={teg.name}
            color={teg.color}
            callback={this.props.show ? ()=>{} : this.props.onClick}
            // selectedTegs={this.props.selectedTegs}
          />
        </li>
      );
    });
  }

  render() {
    return <ul>{this.renderTegs()}</ul>;
  }
}
