import types from './types';

const initialMovies = {
   defaultObjMovie: {
      foo: 'bar',
      array: [1, 2, 3]
   },
   list: [
      /* 'Harry Potter', 'Lord of The Rings', 'Matrix' */
   ]
};

const moviesReducer = (state = initialMovies, action) => {
   switch (action.type) {
      case types.INCREMENT_LAST_ARRAY_ELEM:
         let last = state.defaultObjMovie.array.pop();
         return {
            ...state,
            defaultObjMovie: {
               ...state.defaultObjMovie,
               array: [...state.defaultObjMovie.array, ++last]
            }
         };
      case types.ADD_MOVIE:
         return {
            ...state,
            list: [...state.list, action.movie]
         };
      case types.RESET_MOVIES:
         return {
            ...state,
            list: []
         };
      default:
         return state;
   }
};

export default moviesReducer;
