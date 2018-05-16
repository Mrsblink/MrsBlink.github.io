import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";

const styles = {
    layout: {
        display: "flex"
    },
    aside: {
        padding: "20px",
        textAlign: "left"
    },
    small: {
        display: "block",
        fontSize: "24px",
        color: "grey"
    }
};

const Layout = ({ classes }) => (
    <div className={classes.layout}>

        <aside className={classes.aside}>
            content
            <h1>Warren Buffet
                <small className={classes.small}>Stone Age investor, government backed ponzi-scheme peddler</small>
            </h1>


            <p>Your name is Warren Buffet. Living in Omaha, Nebraska, you are married to Latvian Astrid Menks since 2006. You are a humble and sincere family man. You are the renowned founder of Berkshire Hathaway, a prestigious conglomerate holding company with huge stakes in companies like Dairy Queen, Coca Cola, IBM, Apple, Amazon, and many others successful companies that you knew would succeed when they were eager grassroots.</p>

            <p>Yet, you do not understand basic Austrian economics. You tell people that America’s $21,000,000,000,000 debt is not a problem. You tell everyone that equities are not in a bubble, that real estate is not in a bubble, that commodities are not in a manipulated. You tell the American people that the economy is doing great because of low unemployment numbers, when at the same time retail sales decline. You fool the American people that look up to you as a business magnate and successful investor to lure them into the ponzi scheme that we know today as the United States Dollar. You are a fool. You may have a net worth of $90,000,000,000 - but we all know what happens to everyone that wins the lottery. They end up broke. You are, and will not be any exception.</p>

        </aside>
        <img src={profilePicture} alt=""/>
    </div>
);

export default injectSheet(styles)(WarrenBuffet);

Layout.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired
};

export default injectSheet(styles)(Header);
