export const SET_FILTER_PARAM = "SET_FILTER_PARAM";
export const setFilterParam = (filterType, filterParam) => dispatch => {
  dispatch({
    type: SET_FILTER_PARAM,
    payload: {
      filterType,
      filterParam
    }
  });
};

export const SET_FILTERS_DIRTY = "SET_FILTERS_DIRTY";
export const setFiltersDirty = isDirty => dispatch => {
  dispatch({
    type: SET_FILTERS_DIRTY,
    payload: isDirty
  });
};
