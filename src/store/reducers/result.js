import * as actionTypes from "../actions/actions";

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result })
      };
    case actionTypes.DELETE_RESULT:
      const newArray = state.results.filter(x => x.id !== action.elementId);
      return {
        ...state,
        results: newArray
      };
    default:
      return state;
  }
};

export default reducer;
