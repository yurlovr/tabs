import React, { Component } from "react";
import TegItem from "./components/TegItem";

export default class ShowTegs extends Component {
  constructor(props) {
    super(props);

    this.renderTegs = this.renderTegs.bind(this);
    this.onClickTeg = this.onClickTeg.bind(this);
  }

  onClickTeg(event) {
    console.log(event.target.id);
  }

  renderTegs() {
    return this.props.tegs.map(teg => {
      console.log("tut");
      return (
        <li key={teg.name}>
          <TegItem
            name={teg.name}
            color={teg.color}
            callback={this.onClickTeg}
          />
        </li>
      );
    });
  }

  render() {
    return <ul>{this.renderTegs()}</ul>;
  }
}
