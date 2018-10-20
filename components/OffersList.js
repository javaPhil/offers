import PropTypes from "prop-types";
import { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2
  },
  progressContainer: {
    display: "flex",
    width: "100%",
    height: 250,
    justifyContent: "center",
    padding: "100px"
  },
  close: {
    padding: theme.spacing.unit / 2
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  offersListContainer: {
    margin: 25
  },
  headerHighlighted: {
    color: theme.palette.primary.main
  }
});

const humanReadableDate = isoDate => {
  let date = new Date(isoDate);
  return date.toLocaleString();
};

class OffersList extends Component {
  handleBackButtonClick = event => {
    this.props.setFilterParam("offset", this.props.offset - this.props.limit);
    this.props.fetchOfferData();
  };

  handleNextButtonClick = event => {
    this.props.setFilterParam("offset", this.props.offset + this.props.limit);
    this.props.fetchOfferData();
  };

  handleSnackbarClose = () => {
    this.props.setApiError(false);
    this.props.setOffersLoading(false);
  };

  handleSnackbarRetry = () => {
    this.props.fetchOfferData();
  };

  renderOffersTable = () => {
    const { classes, offset, offers, loading, currentSortFilter } = this.props;
    if (loading) return "";

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              className={
                currentSortFilter === "origin" ? classes.headerHighlighted : ""
              }
            >
              Origin
            </TableCell>
            <TableCell
              className={
                currentSortFilter === "pickupDate"
                  ? classes.headerHighlighted
                  : ""
              }
            >
              Pickup Window
            </TableCell>
            <TableCell
              className={
                currentSortFilter === "destination"
                  ? classes.headerHighlighted
                  : ""
              }
            >
              Destination
            </TableCell>
            <TableCell
              className={
                currentSortFilter === "dropoffDate"
                  ? classes.headerHighlighted
                  : ""
              }
            >
              Dropoff Window
            </TableCell>
            <TableCell
              className={
                currentSortFilter === "miles" ? classes.headerHighlighted : ""
              }
            >
              Total Miles
            </TableCell>
            <TableCell
              className={
                currentSortFilter === "price" ? classes.headerHighlighted : ""
              }
            >
              Offer
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {offers.map((offer, index) =>
            this.renderOffersTableRow(offer, index)
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <div>
              <IconButton
                onClick={this.handleBackButtonClick}
                disabled={offset === 0}
                aria-label="Previous Page"
              >
                <KeyboardArrowLeft />
              </IconButton>
              <IconButton
                onClick={this.handleNextButtonClick}
                aria-label="Next Page"
              >
                <KeyboardArrowRight />
              </IconButton>
            </div>
          </TableRow>
        </TableFooter>
      </Table>
    );
  };

  renderOffersTableRow = (offer, index) => {
    return (
      <TableRow key={`key-${index}`}>
        <TableCell>{`${offer.origin.city}, ${offer.origin.state}`}</TableCell>
        <TableCell>{`${humanReadableDate(
          offer.origin.pickup.start
        )} - ${humanReadableDate(offer.origin.pickup.end)}`}</TableCell>
        <TableCell>{`${offer.destination.city}, ${
          offer.destination.state
        }`}</TableCell>
        <TableCell>{`${humanReadableDate(
          offer.destination.dropoff.start
        )} - ${humanReadableDate(offer.destination.dropoff.end)}`}</TableCell>
        <TableCell>{offer.miles}</TableCell>
        <TableCell>{`$${offer.offer}`}</TableCell>
      </TableRow>
    );
  };

  // loading spinner is a prime candidate to move out into a separate class for global app useage
  renderLoadingSpinner = () => {
    const { classes, loading } = this.props;
    if (!loading) return "";

    return (
      <div className={classes.progressContainer}>
        <CircularProgress className={classes.progress} />
      </div>
    );
  };

  // snackbar is a prime candidate to move out into a separate class for global app useage
  renderErrorSnackbar = () => {
    const { error, classes } = this.props;
    if (!error) return "";

    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={error}
          autoHideDuration={6000}
          onClose={this.handleSnackbarClose}
        >
          <SnackbarContent
            className={classes.error}
            ContentProps={{
              "aria-describedby": "message-id"
            }}
            message={
              <span id="message-id">Oh no! Something went wrong...</span>
            }
            action={[
              <Button
                key="undo"
                color="default"
                size="small"
                onClick={this.handleSnackbarRetry}
              >
                RETRY
              </Button>,
              <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                className={classes.close}
                onClick={this.handleSnackbarClose}
              >
                <CloseIcon />
              </IconButton>
            ]}
          />
        </Snackbar>
      </div>
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.offersListContainer}>
        {this.renderLoadingSpinner()}
        {this.renderOffersTable()}
        {this.renderErrorSnackbar()}
      </div>
    );
  }
}

OffersList.propTypes = {
  classes: PropTypes.object.isRequired,
  offers: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  setFilterParam: PropTypes.func,
  offset: PropTypes.number,
  limit: PropTypes.number,
  fetchOfferData: PropTypes.func,
  error: PropTypes.bool,
  setApiError: PropTypes.func,
  setOffersLoading: PropTypes.func,
  currentSortFilter: PropTypes.string
};

export default withStyles(styles)(OffersList);
