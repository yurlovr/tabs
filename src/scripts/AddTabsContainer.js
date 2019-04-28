import React, { Component } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import TextArea from "./components/TextArea";
import DateAddTabs from "./components/DateAddTabs";
import SetData from "./data/SetData";
import { tabsId, tegsId } from "./MainPage";
import TegsForStorage from "./components/TegsForStorage";
import DeleteTabFromStorage from "./components/DeleteTabFromStorage";
import ScrollToTop from "./components/ScrollToTop";
import CheckURL from "./components/CheckURL";
import ModalWin from "./components/ModalWin";

let tabsObject = {};

class AddTabsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: !this.props.change,
      nameTabs: !this.props.change ? "" : this.props.tab.nameTabs,
      descriptionTabs: !this.props.change ? "" : this.props.tab.descriptionTabs,
      linkTabs: !this.props.change ? "" : this.props.tab.linkTabs,
      tegsTabs: !this.props.change
        ? []
        : this.props.tab.tegs.map(teg => teg.name.replace("#", "")).join(" "),
      tabsFromStorage: this.props.tabs,
      tegsFromStorage: this.props.tegs,
      modalSave: false,
      newTegs: []
    };

    this.addNameTabs = this.addNameTabs.bind(this);
    this.addDescriptionTabs = this.addDescriptionTabs.bind(this);
    this.addLinkTabs = this.addLinkTabs.bind(this);
    this.prepaerToSaveTab = this.prepaerToSaveTab.bind(this);
    this.disabledButton = this.disabledButton.bind(this);
    this.renderButtonBlock = this.renderButtonBlock.bind(this);
    this.addTegsTabs = this.addTegsTabs.bind(this);
    this.saveTab = this.saveTab.bind(this);
    this.delDescriptionTabs = this.delDescriptionTabs.bind(this);
    this.delTegsTabs = this.delTegsTabs.bind(this);
    this.delNameTabs = this.delNameTabs.bind(this);
    this.delLinkTabs = this.delLinkTabs.bind(this);
  }

  addNameTabs(event) {
    this.setState({ nameTabs: event.target.value }, () =>
      this.disabledButton()
    );
  }
  delNameTabs(){
    this.setState({ nameTabs: "" }, () =>
        this.disabledButton()
    );
  }

  addDescriptionTabs(event) {
    this.setState({ descriptionTabs: event.target.value }, () =>
      this.disabledButton()
    );
  }

  delDescriptionTabs(){
    this.setState({descriptionTabs: "",})
  }

  addLinkTabs(event) {
    this.setState(
      {
        linkTabs: event.target.value,
        nameTabs: CheckURL(event.target.value)
          ? new URL(event.target.value).hostname
          : event.target.value
      },
      () => this.disabledButton()
    );
  }

  delLinkTabs() {
    this.setState({linkTabs: ""}, () => this.disabledButton());
}

  addTegsTabs(event) {
    this.setState({ tegsTabs: event.target.value });
  }

  delTegsTabs(){
    this.setState({ tegsTabs: [] });
  }

  prepaerToSaveTab(event) {
    event.preventDefault();
    let arrayTegs = this.state.tegsTabs
      .trim()
      .split(" ")
      .map(i => {
        return i[0] === "#" ? i : "#" + i;
      });
    tabsObject = {
      id: !this.props.change ? Math.random() : this.props.tab.id,
      nameTabs: this.state.nameTabs,
      tegs: TegsForStorage(arrayTegs, arrayTegs, true), // удаляет дублирующиеся теги
      linkTabs: this.state.linkTabs,
      descriptionTabs: this.state.descriptionTabs,
      date: DateAddTabs()
    };
    let objectTegs = TegsForStorage(
      // создаем массив объектов тегов (уникальных) для записи в localStorage
      tabsObject.tegs,
      this.state.tegsFromStorage
    );
    tabsObject.tegs = objectTegs.array;
    this.setState({ modalSave: true, newTegs: objectTegs.arrayFormStorage });
    // this.saveTab(objectTegs.arrayFormStorage);
  }

  saveTab() {
    this.setState(
      {
        modalSave: false,
        tabsFromStorage: this.props.change
          ? DeleteTabFromStorage(
              // удаляем дублирующиеся закладки
              this.state.tabsFromStorage,
              this.props.tab.id
            ).concat(tabsObject)
          : this.state.tabsFromStorage.concat(tabsObject),
        tegsFromStorage: this.state.newTegs,
        nameTabs: "",
        descriptionTabs: "",
        linkTabs: "",
        tegsTabs: ""
      },
      () => {
        SetData(tabsId, this.state.tabsFromStorage);
        SetData(tegsId, this.state.tegsFromStorage);
        ScrollToTop();
      }
    );
  }

  disabledButton() {
    if (this.state.nameTabs.trim() && this.state.linkTabs.trim()) {
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
          onClick={this.prepaerToSaveTab}
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
      <React.Fragment>
        {this.state.modalSave && (
          <ModalWin
            title="Сохранить Закладку?"
            tab={tabsObject}
            okButton={this.saveTab}
            cancelButton={() => this.setState({ modalSave: false })}
            cancelButtonTitle="Отменить"
            okButtonTitle="Сохранить"
            delete={false}
          />
        )}

        <div className="addTabs">
          <Input
            title="Ссылка на сайт"
            name="linkTabs"
            type="text"
            value={this.state.linkTabs}
            placeholder="Вставьте ссылку на сайт"
            onChange={this.addLinkTabs}
            clearInput={this.delLinkTabs}
            isRequired={true}
          />

          <Input
            title="Название Закладки"
            name="nameTabs"
            type="text"
            value={this.state.nameTabs}
            placeholder="Введите название закладки"
            onChange={this.addNameTabs}
            clearInput={this.delNameTabs}
            isRequired={true}
          />

          <Input
            title="Теги"
            name="tegsTabs"
            type="text"
            value={this.state.tegsTabs}
            placeholder="Введите Теги через пробел"
            onChange={this.addTegsTabs}
            clearInput={this.delTegsTabs}
          />

          <TextArea
            title={"Описание закладки"}
            rows={10}
            value={this.state.descriptionTabs}
            name={"description"}
            handleChange={this.addDescriptionTabs}
            placeholder={"Описание закладки"}
            clearArea={this.delDescriptionTabs}
          />
          {this.renderButtonBlock()}
        </div>
      </React.Fragment>
    );
  }
}

export default AddTabsContainer;
