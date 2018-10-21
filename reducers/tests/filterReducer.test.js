import reducer from '../filterReducer'
import * as filterActions from '../../actions/filterActions'
import constants from "../../helpers/constants"

describe('filters reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        ...constants.DEFAULT_FILTERS_STORE
      }
    )
  })

  it('should handle SET_FILTER_PARAM', () => {
    expect(
      reducer([], {
        type: filterActions.SET_FILTER_PARAM,
        payload: {filterType: "order", filterParam: "desc"}
      })
    ).toEqual(
      {
        filters: {
          order: "desc"
        }
      }
    )
  })
  it('should handle SET_FILTERS_DIRTY', () => {
    expect(
      reducer([], {
        type: filterActions.SET_FILTERS_DIRTY,
        payload: true
      })
    ).toEqual(
      {
        isDirty: true
      }
    )
  })
})