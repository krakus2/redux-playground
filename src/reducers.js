import { combineReducers } from 'redux';
import seriesReducers from './app/series/duck';
import moviesReducers from './app/movies/duck';

const rootReducer = combineReducers({
   series: seriesReducers,
   movies: moviesReducers
});

export default rootReducer;
