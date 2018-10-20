import * as offerActions from "../offerActions"
import * as filterActions from "../filterActions"
import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"
import fetchMock from "fetch-mock"
import constants from "../../helpers/constants"

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe("offer async actions", () => {
  afterEach(() => {
    fetchMock.restore()
  })

  // this one is a little brittle as it depends on the API to return real data - not sure if I would use this IRL
  it("creates SET_OFFER_DATA when fetching offers has been done", () => {
    const url = `${constants.CONVOY_API_URL}?limit=1`
    fetchMock.getOnce("/offers", { body: {}, headers: { "content-type": "application/json" }})

    const expectedActions = [
      { type: offerActions.SET_OFFERS_LOADING, payload: true },
      { type: offerActions.SET_API_ERROR, payload: false },
      { type: offerActions.SET_OFFER_DATA, payload: [{
          miles: 2035,
          origin: {
          city: "San Angelo",
          state: "TX",
          pickup: {
          start: "2018-11-01T12:00:00.000Z",
          end: "2018-11-01T15:00:00.000Z"
          }
          },
          destination: {
          city: "Walla Walla",
          state: "WA",
          dropoff: {
          start: "2018-11-07T11:00:00.000Z",
          end: "2018-11-07T17:00:00.000Z"
          }
          },
          offer: 3052.5
        }]
      },
      { type: offerActions.SET_OFFERS_LOADING, payload: false },
      { type: filterActions.SET_FILTERS_DIRTY, payload: false }
    ]
    const store = mockStore({ filterReducer: { filters: { offset: 0, limit: 1, order: 'desc', sort: 'pickupDate' },
    isDirty: false } })

    return store.dispatch(offerActions.fetchOfferData()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})

describe("offer sync actions", () => {

  it("should create an action to set offer data", () => {
    const offerData = [
      {
        "miles": 5000,
        "offer": 150
      }
    ]
    const expectedAction = {
      type: offerActions.SET_OFFER_DATA,
      payload: offerData
    }
    expect(offerActions.setOfferData(offerData)).toEqual(expectedAction)
  })
  it("should create an action to set offers loading to false", () => {
    const loading = false
    const expectedAction = {
      type: offerActions.SET_OFFERS_LOADING,
      payload: loading
    }
    expect(offerActions.setOffersLoading(loading)).toEqual(expectedAction)
  })
  it("should create an action to set API error to true", () => {
    const error = true
    const expectedAction = {
      type: offerActions.SET_API_ERROR,
      payload: error
    }
    expect(offerActions.setApiError(error)).toEqual(expectedAction)
  })
})