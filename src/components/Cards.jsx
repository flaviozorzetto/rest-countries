export default function Cards(props) {
   return (
      <div className="app__cards__container">
         {props.cardList.map(e => {
            return (
               <div
                  className="app__card"
                  key={e.cca3}
                  onClick={() => props.onClick(e)}
               >
                  <div className="app__card__image__wrapper">
                     <img src={e.flags.png} alt="" />
                  </div>
                  <div className="app__card__summary">
                     <h1 className="bold-text">{e.name.common}</h1>
                     <p>
                        <span className="bold-text">Population: </span>
                        {numberWithCommas(e.population)}
                     </p>
                     <p>
                        <span className="bold-text">Region: </span>
                        {e.region}
                     </p>
                     <p>
                        <span className="bold-text">Capital: </span>
                        {e.capital ? e.capital[0] : ''}
                     </p>
                  </div>
               </div>
            );
         })}
      </div>
   );
}

function numberWithCommas(x) {
   var parts = x.toString().split('.');
   parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
   return parts.join(',');
}
