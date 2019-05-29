import types from './types';

//kreatory akcji
const add = movie => ({ type: types.ADD_MOVIE, movie });
const reset = () => ({ type: types.RESET_MOVIES });
const incrementLastElement = () => ({ type: types.INCREMENT_LAST_ARRAY_ELEM });

export default {
   add,
   reset,
   incrementLastElement
};
