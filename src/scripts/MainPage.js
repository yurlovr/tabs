import React, { PureComponent } from "react";
import Button from "./components/form/Button";
import Input from "./components/form/Input";
import AddTabsContainer from "./AddTabsContainer";
import GetData from "./data/GetData";
import ShowTabs from "./ShowTabs";
import ShowTegs from "./ShowTegs";
import DeleteTabFromStorage from "./components/Tabs/DeleteTabFromStorage";
import ChangeTabFromStorage from "./components/helperFunc/ChangeTabFromStorage";
import RenderHeader from "./RenderHeader";
import ScrollToTop from "./components/helperFunc/ScrollToTop";

export const tabsId = "my-tabs";
export const tegsId = "my-tegs";

let arrayTegSearch = [];
let sortArray = [];

class MainPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      openAddContainer: false, // открытие страницы добавления закладок
      constTabs: [], // начальный массив закладок
      newTabs: [], // отсортированный массив закладок
      value: "", // значение тегов, по которым идет поиск
      tabForChange: {}, //  закладка для изменения
      tegValue: [],
      superNewTabs: [],
      newTegsTabs: [],
      pageChange: false,
      prevLengthIntupValue: null,
    };

    this.clickOnButton = this.clickOnButton.bind(this);
    this.openAddTabsContainer = this.openAddTabsContainer.bind(this);
    this.loadData = this.loadData.bind(this);
    this.searchInputTabs = this.searchInputTabs.bind(this);
    this.searchTabs = this.searchTabs.bind(this);
    this.searchByTeg = this.searchByTeg.bind(this);
    this.searchTabsByTeg = this.searchTabsByTeg.bind(this);
    this.deleteTab = this.deleteTab.bind(this);
    this.changeTab = this.changeTab.bind(this);
    this.finishSearchTegs = this.finishSearchTegs.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    let data = GetData(tabsId);
    let dataTegs = GetData(tegsId);
    this.setState(
      {
        constTabs: data ? data : [],
        tegs: dataTegs ? dataTegs : [],
        tabForChange: {},
      },
      () => {
        if (this.state.constTabs.length) {
          this.setState({
            superNewTabs: this.state.constTabs,
            newTabs: this.state.constTabs,
          });
        }
      }
    );
  }

  clickOnButton() {
    this.setState({ openAddContainer: false, pageChange: false }, () =>
      this.loadData()
    );
  }

  openAddTabsContainer() {
    this.setState({ openAddContainer: true, });
  }

  searchInputTabs(event) {
    this.setState(
      {
        value: event.target.value,
        prevLengthIntupValue: event.target.value.length,
      },
      () => this.searchTabs()
    );
  }

  searchByTeg(event) {
    let index = arrayTegSearch.findIndex(item => item === event.target.id);
    if (index !== -1) {
      arrayTegSearch.splice(index, 1);
    } else {
      arrayTegSearch.push(event.target.id);
    }
    this.setState({ tegValue: arrayTegSearch ,}, () => this.searchTabs());
  }

  // поиск по инпуту
  searchTabs() {
    let arr = [];
    sortArray = this.state.constTabs;

    if (
      this.state.value.length &&
      this.state.value.length < this.state.prevLengthIntupValue
    ) {
      sortArray = this.state.newTabs;
    }

    arr = sortArray.filter(tab => {
      return tab.nameTabs
        .toLowerCase()
        .includes(this.state.value.toLowerCase());
    });

    this.setState({ newTabs: arr }, () => this.searchTabsByTeg());
  }

  // поиск по тегам
  searchTabsByTeg(tegValue, value) {
    let arr = [];
    sortArray = this.state.constTabs;

    if (this.state.value.length) {
      sortArray = this.state.newTabs;
    }

    arr = sortArray.filter(tag =>
      tag.tegs.some(teg =>
        this.state.tegValue.some(item => item === teg.name.toLowerCase())
      )
    );

    this.setState({
      newTegsTabs: arr.length ? arr : this.state.newTabs,
      superNewTabs: arr.length ? arr : this.state.newTabs
    });
  }

  finishSearchTegs() {
    arrayTegSearch = [];
    this.setState({ superNewTabs: this.state.constTabs });
  }

  // удалить закладку
  deleteTab(id) {
    DeleteTabFromStorage(this.state.constTabs, id, this.loadData);
  }

  // изменить закладку
  changeTab(id) {
    this.setState({
      tabForChange: ChangeTabFromStorage(this.state.constTabs, id),
      pageChange: true
    });
  }

  render() {
    return (
      <React.Fragment>
        <span
          className="scroll"
          onClick={() => ScrollToTop()}
          title="На вверх"
        />

        <RenderHeader
          mainPage={this.state.openAddContainer}
          changePage={this.state.pageChange}
          countTabs={this.state.constTabs.length}
          isOpen={!this.state.openAddContainer}
          goMain={this.clickOnButton}
        />

        {!this.state.openAddContainer && !this.state.pageChange && (
          <React.Fragment>
            <section className="main_button-section">

              <Button
                label="Создать закладку"
                onClick={this.openAddTabsContainer}
                className="btn btn-light"
              />

            </section>

            <section className="main_input-section">

              <Input
                name={"search"}
                placeholder="Поиск закладок по названию"
                type="search"
                value={this.state.value}
                onChange={this.searchInputTabs}
                valid={true}
              />

            </section>
            {!!this.state.constTabs.length && !this.state.pageChange && (
              <React.Fragment>

                <section className="main_tegs">
                  <ShowTegs tegs={this.state.tegs} onClick={this.searchByTeg} />
                </section>

                <div>

                  <ShowTabs
                    tabs={this.state.superNewTabs}
                    deleteTab={this.deleteTab}
                    changeTab={this.changeTab}
                  />

                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        )}

        {this.state.openAddContainer && !this.state.pageChange && (
          <div className="row wrapper">
            <div className="col-md-6">

              <AddTabsContainer
                returnToMainPage={this.clickOnButton}
                tabs={this.state.constTabs}
                tegs={this.state.tegs}
                change={false}
              />

            </div>
          </div>
        )}

        {this.state.pageChange && (
          <div className="row wrapper">
            <div className="col-md-6">

              <AddTabsContainer
                returnToMainPage={this.clickOnButton}
                tab={this.state.tabForChange}
                change={true}
                tabs={this.state.constTabs}
                tegs={this.state.tegs}
              />

            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default MainPage;
