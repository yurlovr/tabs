import React, { Component } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import TextArea from "./components/TextArea";
import DateAddTabs from "./components/DateAddTabs";
import SetData from "./data/SetData";
import { tabsId, tegsId } from "./MainPage";
import TegsForStorage from "./components/TegsForStorage";

let tabsObject = {};

class AddTabsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: true,
      nameTabs: "",
      descriptionTabs: "",
      linkTabs: "",
      tegsTabs: "",
      tabsFromStorage: this.props.tabs,
      tegsFromStorage: this.props.tegs
    };

    this.addNameTabs = this.addNameTabs.bind(this);
    this.addDescriptionTabs = this.addDescriptionTabs.bind(this);
    this.addLinkTabs = this.addLinkTabs.bind(this);
    this.saveTabs = this.saveTabs.bind(this);
    this.disabledButton = this.disabledButton.bind(this);
    this.renderButtonBlock = this.renderButtonBlock.bind(this);
    this.addTegsTabs = this.addTegsTabs.bind(this);
  }

  addNameTabs(event) {
    this.setState({ nameTabs: event.target.value }, () =>
      this.disabledButton()
    );
  }

  addDescriptionTabs(event) {
    this.setState({ descriptionTabs: event.target.value }, () =>
      this.disabledButton()
    );
  }

  addLinkTabs(event) {
    this.setState({ linkTabs: event.target.value }, () =>
      this.disabledButton()
    );
  }

  addTegsTabs(event) {
    this.setState({ tegsTabs: event.target.value }, () =>
      this.disabledButton()
    );
  }

  saveTabs(event) {
    event.preventDefault();
    tabsObject = {
      id: this.state.tabsFromStorage.length + 1,
      nameTabs: this.state.nameTabs,
      tegs: this.state.tegsTabs.trim().split(" ").map(i => "#" + i),
      linkTabs: this.state.linkTabs,
      descriptionTabs: this.state.descriptionTabs,
      date: DateAddTabs()
    };
    // this.tegsForStorage(this.state.tegs);
    this.setState(
      {
        tabsFromStorage: this.state.tabsFromStorage.concat(tabsObject),
        tegsFromStorage: TegsForStorage(tabsObject.tegs, this.state.tegsFromStorage),
        nameTabs: "",
        descriptionTabs: "",
        linkTabs: "",
        tegsTabs: ""
      },

      () => {
        SetData(tabsId, this.state.tabsFromStorage);
        SetData(tegsId, this.state.tegsFromStorage);
      }
    );
  }

  disabledButton() {
    if (
      this.state.nameTabs &&
      this.state.descriptionTabs &&
      this.state.linkTabs
    ) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  renderButtonBlock() {
    return (
      <div className="addTabs_button-section">
        <Button
          label={"Сохранить"}
          onClick={this.saveTabs}
          className="save_button btn btn-primary"
          disabled={this.state.disabled}
        />

        <Button
          label="Главная"
          onClick={this.props.returnToMainPage}
          className="btn btn-warning margin-right-30"
        />
      </div>
    );
  }

  render() {
    return (
      <div className="addTabs container-fluid">
        <Input
          title="Название Закладки"
          name="nameTabs"
          type="text"
          value={this.state.nameTabs}
          placeholder="Введите название закладки"
          onChange={this.addNameTabs}
        />

        <Input
          title="Ссылка на сайт"
          name="linkTabs"
          type="text"
          value={this.state.linkTabs}
          placeholder="Вставьте ссылку на сайт"
          onChange={this.addLinkTabs}
        />

        <Input
          title="Теги"
          name="tegsTabs"
          type="text"
          value={this.state.tegsTabs}
          placeholder="Введите Теги через пробел"
          onChange={this.addTegsTabs}
        />

        <TextArea
          title={"Описание закладки"}
          rows={10}
          value={this.state.descriptionTabs}
          name={"description"}
          handleChange={this.addDescriptionTabs}
          placeholder={"Описание закладки"}
        />
        {this.renderButtonBlock()}
      </div>
    );
  }
}

export default AddTabsContainer;
