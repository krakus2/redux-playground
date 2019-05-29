import types from './types';

const initialSeries = {
   defaultObjSeries: {
      foo: 'bar'
   },
   series: ['House of Cards', 'Czarnobyl', 'Breaking Bad']
};

function seriesReducer(state = initialSeries, action) {
   switch (action.type) {
      case types.ADD_SERIES:
         return {
            ...state,
            series: [...state.series, action.series]
         };
      case types.RESET_SERIES:
         return {
            ...state,
            series: []
         };
      default:
         return state;
   }
}

export default seriesReducer;
