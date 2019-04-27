import React, { Component } from "react";
import Button from "./components/Button";
import ShowTegs from "./ShowTegs";
import ModalWin from "./components/ModalWin";
import TabItem from "./components/TabItem";

export default class ShowTabsItem extends Component {

    constructor(props){
        super( props);

        this.state={
            modalDelete:false,
        };

        this.showModalWindow = this.showModalWindow.bind(this);
    }

    showModalWindow(){
        this.setState({modalDelete:true});
    }


  render() {
    return (
        <React.Fragment>
        {this.state.modalDelete &&
        <ModalWin title="Удалить Закладку?"
                  tab={this.props.tab}
                  okButton={this.props.deleteTab}
                  cancelButton={() => this.setState({modalDelete:false})}
                  cancelButtonTitle="Отменить"
                  okButtonTitle="Удалить"
                  delete={true}
        />}
      <section className="show-tabs">
        <h3>
          <a className="show-tabs_link" href={this.props.tab.linkTabs}>
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
            // onClick={() => this.props.deleteTab(this.props.tab.id)}
            className="btn btn-link"
            onClick={this.showModalWindow}
          />
        </div>
          <TabItem
          tab={this.props.tab}
          />
        {/*<div>*/}
        {/*  <h4>Теги:</h4>*/}
        {/*  <div className="show-tabs_description show-tabs_tegs">*/}
        {/*    <ShowTegs tegs={this.props.tab.tegs} show={true} />*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <h4>Описание:</h4>*/}
        {/*  <p className="show-tabs_description">*/}
        {/*    {this.props.tab.descriptionTabs}*/}
        {/*  </p>*/}
        {/*</div>*/}
        {/*<p className="show-tabs_date">*/}
        {/*  Дата добавления закладки: {this.props.tab.date}*/}
        {/*</p>*/}
      </section>
        </React.Fragment>
    );
  }
}
