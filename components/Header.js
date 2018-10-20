import { withStyles } from "@material-ui/core/styles";
import Link from "next/link";
import PropTypes from "prop-types";

const styles = theme => ({
  headerContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 75,
    background: "linear-gradient(135deg,#15465a 0,#0a2127 100%)"
  },
  headerItem: {
    margin: "0 30px"
  },
  headerLink: {
    color: "#ffffff",
    margin: "0 30px",
    font: "16px/28px 'proxima-nova',sans-serif"
  }
});

const Header = props => (
  <header className={props.classes.headerContainer}>
    <div className={props.classes.headerItem}>
      <img src="https://convoy.com/convoyC-header.svg" alt="convoy logo icon" />
    </div>
    <Link href="/">
      <a className={props.classes.headerLink}>Offers</a>
    </Link>
    <Link href="/about">
      <a className={props.classes.headerLink}>About</a>
    </Link>
  </header>
);

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
