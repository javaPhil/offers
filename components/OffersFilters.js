import { Component } from "react";
import PropTypes from "prop-types";

import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

import constants from "../helpers/constants";

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 150
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  flexContainerStyle: {
    display: "flex",
    width: "100%",
    justifyContent: "space-evenly"
  },
  button: {
    margin: theme.spacing.unit * 2
  },
  filtersContainer: {
    margin: 25
  }
});

// ¯\_(ツ)_/¯ not the cleanest way to do this but it works for the demo
const humanReadableOption = option => {
  switch (option) {
    case "pickupDate":
      return "Pickup Date";
    case "dropoffDate":
      return "Dropoff Date";
    case "price":
      return "Price";
    case "origin":
      return "Origin";
    case "destination":
      return "Destination";
    case "miles":
      return "Miles";
    case "asc":
      return "Ascending";
    case "desc":
      return "Descending";
    default:
      return option;
  }
};

class OffersFilters extends Component {
  handleFilterChange = event => {
    this.props.setFilterParam("offset", 0);
    this.props.setFilterParam(event.target.name, event.target.value);
    this.props.setFiltersDirty(true);
  };

  renderFilters = () => {
    const { classes } = this.props;

    return [
      <FormControl className={classes.formControl} key="sort-by">
        <InputLabel htmlFor="sort-by">Sort By</InputLabel>
        <Select
          value={this.props.filters["sort"]}
          onChange={this.handleFilterChange}
          inputProps={{
            name: "sort",
            id: "sort-by"
          }}
        >
          {constants.FILTER_SORT_OPTIONS.map(option => {
            return (
              <MenuItem key={`option-key-${option}`} value={option}>
                {humanReadableOption(option)}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>,
      <FormControl className={classes.formControl} key="order-by">
        <InputLabel htmlFor="order-by">Sort Order</InputLabel>
        <Select
          value={this.props.filters["order"]}
          onChange={this.handleFilterChange}
          inputProps={{
            name: "order",
            id: "order-by"
          }}
        >
          {constants.FILTER_ORDER_OPTIONS.map(option => {
            return (
              <MenuItem key={`option-key-${option}`} value={option}>
                {humanReadableOption(option)}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>,
      <FormControl className={classes.formControl} key="limit">
        <InputLabel htmlFor="limit">Results Per Page</InputLabel>
        <Select
          value={this.props.filters["limit"]}
          onChange={this.handleFilterChange}
          inputProps={{
            name: "limit",
            id: "limit"
          }}
        >
          {constants.FILTER_LIMIT_OPTIONS.map(option => {
            return (
              <MenuItem key={`option-key-${option}`} value={option}>
                {option}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    ];
  };

  handleSubmitClick = event => {
    event.preventDefault();
    this.props.fetchOfferData();
  };

  renderSubmitButton = () => {
    const { classes } = this.props;
    return this.props.isDirty ? (
      <Button
        variant="contained"
        color="primary"
        size="medium"
        className={classes.button}
        onClick={this.handleSubmitClick}
      >
        Submit
      </Button>
    ) : (
      <Button
        variant="contained"
        color="primary"
        size="medium"
        disabled
        className={classes.button}
      >
        Submit
      </Button>
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.filtersContainer}>
        <form autoComplete="off" className={classes.flexContainerStyle}>
          {this.renderFilters()}
          {this.renderSubmitButton()}
        </form>
      </div>
    );
  }
}

OffersFilters.propTypes = {
  classes: PropTypes.object.isRequired,
  filters: PropTypes.object.isRequired,
  isDirty: PropTypes.bool,
  setFilterParam: PropTypes.func,
  setFiltersDirty: PropTypes.func,
  fetchOfferData: PropTypes.func
};

export default withStyles(styles)(OffersFilters);
