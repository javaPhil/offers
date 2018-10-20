import constants from "../helpers/constants";
import * as filterActions from "../actions/filterActions";

export default (state = constants.DEFAULT_FILTERS_STORE, action) => {
  switch (action.type) {
    case filterActions.SET_FILTER_PARAM:
      switch (action.payload.filterType) {
        case "offset":
          return Object.assign({}, state, {
            filters: {
              ...state.filters,
              offset: action.payload.filterParam
            }
          });
        case "limit":
          return Object.assign({}, state, {
            filters: {
              ...state.filters,
              limit: action.payload.filterParam
            }
          });
        case "order":
          return Object.assign({}, state, {
            filters: {
              ...state.filters,
              order: action.payload.filterParam
            }
          });
        case "sort":
          return Object.assign({}, state, {
            filters: {
              ...state.filters,
              sort: action.payload.filterParam
            }
          });
        default:
          return state;
      }
    case filterActions.SET_FILTERS_DIRTY:
      return Object.assign({}, state, { isDirty: action.payload });
    default:
      return state;
  }
};
