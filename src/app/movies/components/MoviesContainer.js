import React from 'react';
import { connect } from 'react-redux';
import { getAllMovies } from '../duck/operations.js';

const MoviesContainer = ({ movies, getAllMovies }) => {
   useEffect(() => {
      getAllMovies();
      //eslint-disable-next-line
   }, []);
   return (
      <ul>
         {props.movies.list.map(movie => (
            <li key={movie}>{movie}</li>
         ))}
      </ul>
   );
};

//state.movies, bo taka nazwe dostal w domyslnym pliku reducers
const mapStateToProps = state => ({
   movies: state.movies
});

const mapDispatchToProps = dispatch => ({
   getAllMovies: () => dispatch(getAllMovies())
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(MoviesContainer);
