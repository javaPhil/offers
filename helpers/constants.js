export default {
  DEFAULT_FILTERS_STORE: {
    filters: {
      offset: 0,
      limit: 10,
      order: "desc",
      sort: "pickupDate"
    },
    isDirty: false
  },
  DEFAULT_OFFERS_STORE: {
    loading: true,
    error: false,
    offers: []
  },
  FILTER_OFFSET_OPTIONS: Array(100).keys, // range of 0..99
  FILTER_LIMIT_OPTIONS: [10, 25, 50, 100],
  FILTER_ORDER_OPTIONS: ["asc", "desc"],
  FILTER_SORT_OPTIONS: [
    "pickupDate",
    "dropoffDate",
    "price",
    "origin",
    "destination",
    "miles"
  ],
  CONVOY_API_URL: "https://convoy-frontend-homework-api.herokuapp.com/offers"
};
