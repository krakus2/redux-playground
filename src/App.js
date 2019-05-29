import React from 'react';
import './App.css';
import { bindActionCreators } from 'redux';
import store from './store';
import { moviesActions } from './app/movies/duck';
import { seriesActions } from './app/series/duck';
import MoviesContainer from './app/movies/components/MoviesContainer';
import MoviesForm from './app/movies/components/MoviesForm';

store.dispatch(moviesActions.add('Captain America'));
store.dispatch(moviesActions.incrementLastElement());
store.dispatch(seriesActions.add('Game of Thrones'));
store.dispatch(seriesActions.add('Sherlock'));
store.dispatch(moviesActions.incrementLastElement());

//reduxowy kreator akcji, mozna dodac wiecej zrobionych funkcji w obiekcie podawanym jako 1 parametr
const addMovie2 = bindActionCreators({ add: moviesActions.add }, store.dispatch);
addMovie2.add('Forrest Gump');

window.store = store;

class App extends React.Component {
   onSubmit = e => {
      console.log('submit');
   };

   render() {
      return (
         <div className="App">
            <MoviesContainer />
            <MoviesForm />
         </div>
      );
   }
}

export default App;
