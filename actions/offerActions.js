import fetch from "cross-fetch";
import constants from "../helpers/constants";
import convertParamsToUrl from "../helpers/convertParamsToUrl";
import { setFiltersDirty } from "./filterActions";

export const fetchOfferData = () => {
  return (dispatch, getState) => {
    const state = getState();
    const filterParams = state.filterReducer.filters;

    const convoyURL = convertParamsToUrl(
      constants.CONVOY_API_URL,
      filterParams
    );

    dispatch(setOffersLoading(true));
    dispatch(setApiError(false));

    return fetch(convoyURL)
      .then(response => {
        if (response.status >= 400) {
          console.error("Error response from server", response);
          dispatch(setApiError(true));
          dispatch(setOffersLoading(true));
        }
        return response.json();
      })
      .then(json => {
        dispatch(setOfferData(json));
        dispatch(setOffersLoading(false));
        dispatch(setFiltersDirty(false));
      });
  };
};

export const SET_OFFER_DATA = "SET_OFFER_DATA";
export function setOfferData(data){
  return{
    type: SET_OFFER_DATA,
    payload: data
  };
};

export const SET_OFFERS_LOADING = "SET_OFFERS_LOADING";
export function setOffersLoading(loading){
  return {
    type: SET_OFFERS_LOADING,
    payload: loading
  };
};

export const SET_API_ERROR = "SET_API_ERROR";
export function setApiError(isError){
  return {
    type: SET_API_ERROR,
    payload: isError
  };
};
