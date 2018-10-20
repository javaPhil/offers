import { Component } from "react";
import { connect } from "react-redux";

import constants from "../helpers/constants";
import {
  fetchOfferData,
  setApiError,
  setOffersLoading
} from "../actions/offerActions";
import { setFilterParam, setFiltersDirty } from "../actions/filterActions";

import OffersList from "../components/OffersList";
import OffersFilters from "../components/OffersFilters";

class OffersListContainer extends Component {
  componentWillMount() {
    this.props.fetchOfferData();
  }

  render() {
    return (
      <div>
        <OffersFilters
          filters={this.props.filterReducer.filters}
          isDirty={this.props.filterReducer.isDirty}
          setFilterParam={this.props.setFilterParam}
          setFiltersDirty={this.props.setFiltersDirty}
          fetchOfferData={this.props.fetchOfferData}
        />
        <OffersList
          offers={this.props.offerReducer.offers}
          loading={this.props.offerReducer.loading}
          setFilterParam={this.props.setFilterParam}
          offset={this.props.filterReducer.filters.offset}
          limit={this.props.filterReducer.filters.limit}
          fetchOfferData={this.props.fetchOfferData}
          error={this.props.offerReducer.error}
          setApiError={this.props.setApiError}
          setOffersLoading={this.props.setOffersLoading}
          currentSortFilter={this.props.filterReducer.filters.sort}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  fetchOfferData: () => {
    dispatch(fetchOfferData());
  },
  setFilterParam: (filterType, filterParam) => {
    dispatch(setFilterParam(filterType, filterParam));
  },
  setFiltersDirty: isDirty => {
    dispatch(setFiltersDirty(isDirty));
  },
  setApiError: isError => {
    dispatch(setApiError(isError));
  },
  setOffersLoading: loading => {
    dispatch(setOffersLoading(loading));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OffersListContainer);
