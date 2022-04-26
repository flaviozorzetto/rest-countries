import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
// import './styles/css/styles.css';
import './styles.scss';

export default class App extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         'dark-mode': false,
      };

      this.handleThemeChange = this.handleThemeChange.bind(this);
   }

   handleThemeChange() {
      this.setState(state => {
         return {
            'dark-mode': !state['dark-mode'],
         };
      });
   }

   render() {
      return (
         <div className={`app${this.state['dark-mode'] ? ' dark-mode' : ''}`}>
            <Header themeChangeFunc={this.handleThemeChange} />
            <Main />
         </div>
      );
   }
}
