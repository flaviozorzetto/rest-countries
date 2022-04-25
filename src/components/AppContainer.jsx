import React from 'react';
import Cards from './Cards';
import LoadingSpinner from './LoadingSpinner';
import SingleCard from './SingleCard';

export default class AppContainer extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <section
            className={`app__container ${
               this.props.loading ? 'loading__spinner__placeholder' : ''
            }`}
         >
            {this.props.loading ? (
               <LoadingSpinner />
            ) : this.props.singleCountry.display ? (
               <SingleCard
                  card={this.props.singleCountry.country}
                  backButtonClick={this.props.backButtonClick}
                  countryKeys={this.props.countryKeys}
               />
            ) : (
               <Cards
                  cardList={this.props.countriesInfo}
                  onClick={this.props.onClick}
               />
            )}
         </section>
      );
   }
}
