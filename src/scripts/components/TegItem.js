import React, { Component } from "react";

export default class TegItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    };

    this.clickSpan = this.clickSpan.bind(this);
  }


    clickSpan(event){
        this.props.callback(event);
        this.setState({ checked: !this.state.checked });
    }
  render() {
    return (
      <span
          key={this.props.name}
        className={`main_teg ${
          this.state.checked  ? "-active" : ""
        }`}
        style={{ backgroundColor: this.props.color }}
        id={this.props.name}
        onClick={(event) => this.clickSpan(event)}
      >
        {this.props.name}
      </span>
    );
  }
}

// ({name, color, callback, state}) => {
//     const [checked, setCount] = useState(state);
//     return(
//             <span className={`main_teg ${checked ? "-active" : ""}`} style={{backgroundColor:color,}} id={name} onClick={(event)=>{setCount(!checked); callback(event)}}>
//                 {name}
//             </span>
//     )
// };
//
// export default TegItem;
