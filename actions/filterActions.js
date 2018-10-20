export const SET_FILTER_PARAM = "SET_FILTER_PARAM";
export function setFilterParam(filterType, filterParam){
  return {
    type: SET_FILTER_PARAM,
    payload: {
      filterType,
      filterParam
    }
  };
};

export const SET_FILTERS_DIRTY = "SET_FILTERS_DIRTY";
export function setFiltersDirty(isDirty){
  return {
    type: SET_FILTERS_DIRTY,
    payload: isDirty
  };
};
