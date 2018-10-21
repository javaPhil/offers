import reducer from '../offerReducer'
import * as offerActions from '../../actions/offerActions'
import constants from "../../helpers/constants"

describe('offers reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        ...constants.DEFAULT_OFFERS_STORE
      }
    )
  })

  it('should handle SET_OFFER_DATA', () => {
    expect(
      reducer([], {
        type: offerActions.SET_OFFER_DATA,
        payload: [{miles: 50}, {miles: 150}]
      })
    ).toEqual(
      {
        offers: [
          {miles: 50}, 
          {miles: 150}
        ]
      }
    )
  })
  it('should handle SET_API_ERROR', () => {
    expect(
      reducer({}, {
        type: offerActions.SET_API_ERROR,
        payload: true
      })
    ).toEqual(
      {
        error: true
      }
    )
  })
  it('should handle SET_OFFERS_LOADING', () => {
    expect(
      reducer({}, {
        type: offerActions.SET_OFFERS_LOADING,
        payload: false
      })
    ).toEqual(
      {
        loading: false
      }
    )
  })
})