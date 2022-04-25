import React from 'react';
import AppContainer from './AppContainer';

export default class Main extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         countryAbrevKeys: '',
         'search-value': '',
         'filter-value': 'all',
         loading: false,
         'countries-list': [],
         'displaying-countries': [],
         'single-country': {
            display: false,
            country: {},
         },
      };

      this.handleSearchOnChange = this.handleSearchOnChange.bind(this);
      this.handleFilterOnChange = this.handleFilterOnChange.bind(this);
      this.requestCountriesInfo = this.requestCountriesInfo.bind(this);
      this.filterCountry = this.filterCountry.bind(this);
      this.displayInfo = this.displayInfo.bind(this);
      this.handleBackButton = this.handleBackButton.bind(this);
   }

   handleBackButton() {
      this.setState({
         'single-country': {
            display: false,
            country: {},
         },
      });
   }

   displayInfo(country) {
      this.setState({
         'single-country': {
            display: true,
            country: country,
         },
      });
   }

   handleSearchOnChange(event) {
      this.setState({ 'search-value': event.target.value }, this.filterCountry);
   }

   filterCountry() {
      let regex = new RegExp(this.state['search-value'], 'gi');

      this.setState(function (state) {
         return {
            'displaying-countries': state['countries-list'].filter(e => {
               return regex.test(e.name.common);
            }),
         };
      });
   }

   handleFilterOnChange(event) {
      this.setState(
         { 'filter-value': event.target.value },
         this.requestCountriesInfo
      );
   }

   componentDidMount() {
      this.requestCountriesInfo().then(() => {
         setTimeout(() => {
            this.setState({
               countryAbrevKeys: this.state['countries-list'].map((e, i) => [
                  e.cca3,
                  e.name.common,
               ]),
            });
         }, 10);
      });
   }

   async requestCountriesInfo() {
      this.setState({
         loading: true,
      });

      let response =
         this.state['filter-value'] == 'all'
            ? await fetch('https://restcountries.com/v3.1/all')
            : await fetch(
                 'https://restcountries.com/v3.1/region/' +
                    this.state['filter-value']
              );

      let body = await response.json();

      this.setState(
         {
            'countries-list': body,
            loading: false,
         },
         this.filterCountry
      );
   }

   render() {
      return (
         <main className="main">
            <header className="main__header">
               <div className="main__search__bar">
                  <input
                     className="main__search__bar__input"
                     value={this.state['search-value']}
                     onChange={this.handleSearchOnChange}
                     type="text"
                     placeholder="Search for a country..."
                  />
               </div>
               <div className="main__filter__bar">
                  <select
                     className="main__filter__bar__select"
                     value={this.state['filter-value']}
                     onChange={this.handleFilterOnChange}
                     placeholder="Filter"
                  >
                     <option value="all">All</option>
                     <option value="america">America</option>
                     <option value="africa">Africa</option>
                     <option value="asia">Asia</option>
                     <option value="oceania">Oceania</option>
                     <option value="europe">Europe</option>
                  </select>
               </div>
            </header>
            <AppContainer
               searchVal={this.state['search-value']}
               filterVal={this.state['filter-value']}
               loading={this.state.loading}
               countriesInfo={this.state['displaying-countries']}
               onClick={this.displayInfo}
               singleCountry={this.state['single-country']}
               backButtonClick={this.handleBackButton}
               countryKeys={this.state.countryAbrevKeys}
            />
         </main>
      );
   }
}
