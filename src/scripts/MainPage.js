import React, { Component } from "react";
import Button from "./components/Button";
import AddTabsContainer from "./AddTabsContainer";
import GetData from "./data/GetData";
import ShowTabs from "./ShowTabs";
import Input from "./components/Input";
import ShowTegs from "./ShowTegs";

export const tabsId = "my-tabs";
export const tegsId = "my-tegs";

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openAddContainer: false,
      tabs: [],
      newTabs: [],
      countTabs: null,
      value: ""
    };

    this.clickOnButton = this.clickOnButton.bind(this);
    this.openAddTabsContainer = this.openAddTabsContainer.bind(this);
    this.loadData = this.loadData.bind(this);
    this.searchInputTabs = this.searchInputTabs.bind(this);
    this.searchTabs = this.searchTabs.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.loadData();
  }

  loadData() {
    let data = GetData(tabsId);
    let dataTegs = GetData(tegsId);
    this.setState(
      { tabs: data ? data : [], tegs: dataTegs ? dataTegs : [] },
      () => {
        if (this.state.tabs && this.state.tabs.length) {
          this.setState({
            countTabs: this.state.tabs.length,
            newTabs: this.state.tabs
          });
        }
      }
    );
  }

  clickOnButton() {
    this.setState({ openAddContainer: false }, () => this.loadData());
  }

  openAddTabsContainer() {
    this.setState({ openAddContainer: true });
  }

  searchInputTabs(event) {
    this.setState({ value: event.target.value }, () =>
      this.searchTabs(this.state.value)
    );
  }

  searchTabs(value) {
    let arr = [];
    arr = this.state.tabs.filter(tab => {
      return tab.nameTabs.includes(value);
    });
    this.setState({ newTabs: arr });
  }

  render() {
    return (
      <React.Fragment>
        <h3 className="main_header">
          {!this.state.openAddContainer ? (
            <React.Fragment>
              Главная{" "}
              <span className="main_countTabs">
                У Вас {this.state.countTabs ? this.state.countTabs : "нет"}{" "}
                закладок.
              </span>
            </React.Fragment>
          ) : (
            "Создать Закладку"
          )}
        </h3>
        {!this.state.openAddContainer && (
          <React.Fragment>
            <section className="main_button-section">
              <Button
                label="Главная"
                onClick={this.clickOnButton}
                className="first_button btn btn-primary"
              />
              <Button
                label="Создать закладку"
                onClick={this.openAddTabsContainer}
                className="btn btn-light"
              />
            </section>

            <section className="main_input-section">
              <Input
                name={"search"}
                placeholder="Поиск закладдок по названию"
                type="search"
                value={this.state.value}
                onChange={this.searchInputTabs}
              />
            </section>
            {this.state.countTabs && (
              <React.Fragment>
                <section className="main_tegs">
                  <ShowTegs tegs={this.state.tegs} />
                </section>

                <div>
                  <ShowTabs tabs={this.state.newTabs} />
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        )}

        {this.state.openAddContainer && (
          <div className="col-md-6">
            <AddTabsContainer
              returnToMainPage={this.clickOnButton}
              tabs={this.state.tabs}
              tegs={this.state.tegs}
            />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default MainPage;
