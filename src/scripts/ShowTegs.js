import React, { PureComponent } from "react";
import TegItem from "./components/Tegs/TegItem";

export default class ShowTegs extends PureComponent {
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
            callback={this.props.show ? () => {} : this.props.onClick}
          />

        </li>
      );
    });
  }

  render() {
    return <ul>{this.renderTegs()}</ul>;
  }
}
