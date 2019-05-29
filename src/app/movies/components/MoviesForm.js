import React from 'react';
import { connect } from 'react-redux';
import { moviesActions } from '../duck';

const MoviesForm = props => {
   const inputRef = React.createRef();

   const addMovie = e => {
      e.preventDefault();

      console.log(inputRef.current.value);
      props.add(inputRef.current.value);
      inputRef.current.value = '';
   };
   return (
      <form onSubmit={addMovie}>
         <input type="text" ref={inputRef} />
         <button type="submit">Submit</button>
      </form>
   );
};

const mapDispatchToProps = dispatch => ({
   add: movie => dispatch(moviesActions.add(movie))
});

export default connect(
   null,
   mapDispatchToProps
)(MoviesForm);
