import convertParamsToUrl from "../convertParamsToUrl"
import constants from "../constants"

describe("convertParamsToUrl", () => {
  it("should return a working URL", () => {
    const params = constants.DEFAULT_FILTERS_STORE.filters;
    const url = constants.CONVOY_API_URL;
    expect(convertParamsToUrl(url, params)).toEqual("https://convoy-frontend-homework-api.herokuapp.com/offers?offset=0&limit=10&order=desc&sort=pickupDate");
  })
  it("should return an empty string with a undefined url", () => {
    const params = constants.DEFAULT_FILTERS_STORE.filters;
    const url = undefined;
    console.log(convertParamsToUrl(url, params));
    expect(convertParamsToUrl(url, params)).toEqual("");
  })
  it("should return an empty string with a undefined params", () => {
    const params = undefined;
    const url = constants.CONVOY_API_URL;
    console.log(convertParamsToUrl(url, params));
    expect(convertParamsToUrl(url, params)).toEqual("");
  })
})