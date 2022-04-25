export default function (props) {
   return (
      <header className="app__header">
         <div className="app__header__container">
            <h1 className="app__header__title">Where in the world?</h1>
            <div
               className="app__header__theme__changer"
               onClick={props.themeChangeFunc}
            >
               <span className="material-symbols-outlined">dark_mode</span>
               <span className="app__header__theme__changer__text">
                  Dark Mode
               </span>
            </div>
         </div>
      </header>
   );
}
