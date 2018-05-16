import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";
import { nosPropTypes } from "@nosplatform/api-functions/es6";
import { injectNOS } from "../../nos";

import ProfileLayout from "../ProfileLayout";
import classNames from 'classnames';

import DaHongFei from '../Profiles/DaHongFei';
import JohnMacafee from '../Profiles/JohnMacafee';
import JustinSun from '../Profiles/JustinSun';
import SuppoMan from '../Profiles/SuppoMan';
import RogerV from '../Profiles/RogerV';
import IanBalina from '../Profiles/IanBalina';
import Vitalik from '../Profiles/Vitalik';
import WarrenBuffet from '../Profiles/WarrenBuffet';
import NosWhale from '../Profiles/NosWhale';

const styles = {
    landing: {
        backgroundColor: "#f0f0f0",
        height: '100%'
    },
    landingWrapper: {
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        height: "100%",
        textAlign: "center"
    },
    hide: {
        display: "none"
    },
    show: {
        display: "block"
    },
    cheatBox: {
        position: "absolute",
        right: 0,
        bottom: 0,
    }
};

class NOSActions extends React.Component {

    state = {
        balance: undefined,
        balanceManual: undefined,
        selectedProfile: "WarrenBuffet",
        profileSelected: false
    };

    components = {
        SuppoMan: SuppoMan,
        JustinSun: JustinSun,
        JohnMacafee: JohnMacafee,
        Vitalik: Vitalik,
        RogerV: RogerV,
        DaHongFei: DaHongFei,
        IanBalina: IanBalina,
        WarrenBuffet: WarrenBuffet,
        NosWhale: NosWhale,
    };

    handleBalanceOverride(balance){
        this.setState({
            balanceManual: balance,
        });
    }

    handleGetProfile = async scriptHash => {
        let balance = 0;
        let profile = "";

        if (this.state.balanceManual !== undefined) {
            balance = Number(this.state.balanceManual)
        }
        else {
            balance = Number(await this.props.nos.getBalance(scriptHash));
        }

        switch (true) {
            case (balance === 0):
                profile = "WarrenBuffet";
                break;
            case (balance > 0 && balance <= 2):
                profile = "SuppoMan";
                break;
            case (balance > 2 && balance <= 5):
                profile = "IanBalina";
                break;
            case (balance > 5 && balance <= 10):
                profile = "RogerV";
                break;
            case (balance > 10 && balance <= 15):
                profile = "JohnMacafee";
                break;
            case (balance > 15 && balance <= 50):
                profile = "JustinSun";
                break;
            case (balance > 50 && balance <= 100):
                profile = "Vitalik";
                break;
            case (balance > 100 && balance <= 1000):
                profile = "DaHongFei";
                break;
            case (balance > 1000):
                profile = "NosWhale";
                break;
            default:
                alert("Something went wrong. Load Application in nOS browser!");
                return;
        }

        this.setState({
            balance: balance,
            selectedProfile: profile,
            profileSelected: true
        });
    }

    render() {
        const { classes } = this.props;

        // Get Balance
        const neo = "c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b";
        let Profile = this.components[this.state.selectedProfile];
        let isProfileSelected = this.state.profileSelected;

        return (
            <React.Fragment>
                <div className={classNames(classes.landing, "container")}>
                    <div className={classes.landingWrapper}>
                        <h1 className={"is-size-1"}><i>CryptoStars</i></h1>
                        <h2 className={"is-size-3"}>
                            Well did you ever wonder which crypto personality are you?!<br/>
                        </h2>
                        <hr/>
                        <h3 className={"is-size-4"}>
                            Neither did we but thanks to the state of the art blockchain technology the answer is only one click of the button away! (and hey... you are already here)<br/>
                            By running your <strong>Neo</strong> balance through our advanced blockchain-based, AI assisted neural-networked computated benzine fault-tolerant formula, we are able to perfectly match you to the personality that matches you best.
                        </h3>
                        <h3 className={"is-size-4"}>
                            Be underwhelmed, mildly amused or slightly offended, possibly all at once.
                        </h3>
                        <hr/>
                        <div>
                            <button
                                className={"button is-primary"}
                                onClick={() => this.handleGetProfile(neo)}
                            >Click to find out!</button>
                        </div>
                    </div>
                </div>

                <ProfileLayout
                    isActive={isProfileSelected}
                    profile={Profile}
                >
                </ProfileLayout>

                <div className={classes.cheatBox}>
                    <input type="number" onChange={(evt) => { this.handleBalanceOverride(evt.target.value) }} placeholder="Manual override of balance :)"/>
                </div>
            </React.Fragment>
        );
    }
}

NOSActions.propTypes = {
    classes: PropTypes.objectOf(PropTypes.any).isRequired,
    nos: nosPropTypes.isRequired
};

export default injectNOS(injectSheet(styles)(NOSActions));
