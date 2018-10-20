import * as filterActions from "../filterActions"

describe("filter actions", () => {
  it("should create an action to set a filter param", () => {
    const filterParam = "asc"
    const filterType = "order"
    const expectedAction = {
      type: filterActions.SET_FILTER_PARAM,
      payload: {filterType, filterParam}
    }
    expect(filterActions.setFilterParam(filterType,filterParam)).toEqual(expectedAction)
  })
  it("should create an action to set isDirty to true", () => {
    const isDirty = true
    const expectedAction = {
      type: filterActions.SET_FILTERS_DIRTY,
      payload: isDirty
    }
    expect(filterActions.setFiltersDirty(isDirty)).toEqual(expectedAction)
  })
})