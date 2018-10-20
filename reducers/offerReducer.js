import constants from "../helpers/constants";
import * as offerActions from "../actions/offerActions";

export default (state = constants.DEFAULT_OFFERS_STORE, action) => {
  switch (action.type) {
    case offerActions.SET_OFFER_DATA: {
      return Object.assign({}, state, {
        offers: action.payload
      });
    }
    case offerActions.SET_OFFERS_LOADING: {
      return Object.assign({}, state, {
        loading: action.payload
      });
    }
    case offerActions.SET_API_ERROR:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
};
