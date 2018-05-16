import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";

import SpinningLogo from "./../SpinningLogo";

const styles = {
  landing: {
    backgroundColor: "#f0f0f0",
    display: 'flex',
      height: '100%'
  },
  h1: {
    fontSize: "1.5em"
  }
};

const Landing = ({ classes, props }) => (
    <div className={classes.landing}>
      <h1>Landing Page</h1>
        {props.children}
    </div>

);

export default injectSheet(styles)(Landing);
