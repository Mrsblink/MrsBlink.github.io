import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";
import classNames from 'classnames';

const styles = {

    container: {
        top: "-1000px",
        height: "100%",
        background: "white",
        position: "absolute",
        transition: "all 2s"
    },
    containerInView: {
        top: "0px",
        left: "0px",
        right: "0px",
        height: "100%",
        background: "white",
        position: "absolute",
        transition: "all 2s"
    },
    wrapper: {
        display: "flex",
        height: "100%",
        alignItems: "center"
    },
    aside: {
        padding: "20px",
        textAlign: "left"
    },
    img: {
        width: "25%",
        borderTopRightRadius: "20px",
        borderBottomRightRadius: "20px",
    },
    small: {
        display: "block",
        fontSize: "24px",
        color: "grey"
    }
};

const ProfileLayout = ({ classes, profile, isActive }) => (

    <div className={!isActive ? classes.container : classes.containerInView}>
        <div className={classNames(classes.wrapper, "container")}>
            <div className={"columns"}>
                <aside className={classNames(classes.aside, "column", "is-two-thirds")}>
                    <h1>{profile.name}
                        <small className={classes.small}>{profile.subtitle}</small>
                    </h1>
                    <p>{profile.text}</p>
                </aside>
                <img className={"column"} src={profile.imgName} alt=""/>
            </div>
        </div>
    </div>
);

ProfileLayout.propTypes = {
    classes: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    isActive: PropTypes.bool.isRequired,
};

export default injectSheet(styles)(ProfileLayout);
