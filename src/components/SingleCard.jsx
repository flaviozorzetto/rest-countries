export default function SingleCard(props) {
   // console.log(props.card.flags);
   // console.log(props.card.name);
   // console.log(props.card.population);
   // console.log(props.card.region);
   // console.log(props.card.subregion);
   // console.log(props.card.capital);
   // console.log(props.card.tld);
   // console.log(props.card.currencies);
   // console.log(props.card.languages);
   // console.log(props.card.borders);
   return (
      <div className="app__single__card">
         <button className="app__back__button" onClick={props.backButtonClick}>
            <span className="material-symbols-outlined">arrow_back</span>
            Back
         </button>

         <div className="app__single__card__container">
            <div className="img__wrapper">
               <img src={props.card.flags.png} alt="" />
            </div>
            <div className="info">
               <h1>
                  <span className="bold-text">{props.card.name.common}</span>
               </h1>
               <div className="info__text__wrapper">
                  <p>
                     <span className="bold-text bold-text-600">
                        Native name:
                     </span>
                     {Object.values(props.card.name.nativeName)[0].common
                        ? Object.values(props.card.name.nativeName)[0].common
                        : 'null'}
                  </p>
                  <p>
                     <span className="bold-text bold-text-600">
                        Population:
                     </span>
                     {numberWithCommas(props.card.population)}
                  </p>
                  <p>
                     <span className="bold-text bold-text-600">Region:</span>
                     {props.card.region}
                  </p>
                  <p>
                     <span className="bold-text bold-text-600">
                        Sub Region:
                     </span>
                     {props.card.subregion}
                  </p>
                  <p>
                     <span className="bold-text bold-text-600">Capital: </span>
                     {props.card.capital}
                  </p>
                  <p>
                     <span className="bold-text bold-text-600">
                        Top Level Domain:
                     </span>
                     {props.card.tld[0]}
                  </p>
                  <p>
                     <span className="bold-text bold-text-600">
                        Currencies:
                     </span>
                     {Object.values(props.card.currencies)
                        .map(el => el.name)
                        .reduce((prev, cur) => prev + ', ' + cur)}
                  </p>
                  <p>
                     <span className="bold-text bold-text-600">Languages:</span>
                     {Object.values(props.card.languages).reduce(
                        (prev, cur) => prev + ', ' + cur
                     )}
                  </p>
               </div>
               <div className="borders">
                  <p>
                     <span className="bold-text bold-text-600">
                        Border Countries:
                     </span>
                  </p>
                  <ul>
                     {props.card.border ? (
                        props.card.borders.map(function (el, i) {
                           let name;
                           props.countryKeys.forEach(e => {
                              if (e[0] == el) {
                                 name = e[1];
                              }
                           });
                           return <li key={i}>{name}</li>;
                        })
                     ) : (
                        <li>No borders</li>
                     )}
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
}

function numberWithCommas(x) {
   var parts = x.toString().split('.');
   parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
   return parts.join(',');
}
