import types from './types';

//kreatory akcji
const add = series => ({ type: types.ADD_SERIES, series });
const reset = () => ({ type: types.RESET_SERIES });

export default {
   add,
   reset
};
