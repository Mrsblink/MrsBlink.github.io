import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";

import NOSActions from "./../../components/NOSActions";

const styles = {
    "@import": "https://fonts.googleapis.com/css?family=Abel",
    "@global html, body": {
        fontFamily: "Abel, sans-serif",
        margin: 0,
        padding: 0,
        background: "-webkit-linear-gradient(top, rgba(212,228,239,1) 0%,rgba(134,174,204,1) 100%)",
        boxSizing: "border-box",
        height: "100%",
    },
    "@global #root": {
        height: "100%"
    },
    App: {
        textAlign: "center",
        height: "100%"
    },
    intro: {
        fontSize: "large"
    },
    lineBreak: {
        width: "75%",
        borderTop: "1px solid #333333",
        margin: "32px auto"
    },
    "@global h1": {
        fontSize: "90px",
        margin: "0",
        fontStyle: "italic",
        borderBottom: "1px solid",
    },


};

const App = ({ classes }) => (
    <NOSActions />
);

App.propTypes = {
    classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(App);
