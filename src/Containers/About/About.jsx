import React, { Component } from "react";
import styles from "./About.module.scss";
import profile from "../../Images/Louis.png";


export default class About extends Component {
    render () {
        return (
                <div id={styles.aboutMe}>
                    <div className={styles.aboutMeLeft}>
                        <img src={profile} alt="Profile"></img>
                    </div>
                    <div className={styles.aboutMeRight}>
                        <p className={styles.aboutTxt}>Hi, I am Louis Valder a <span className={styles.spanTxt}>Front-End Web Developer</span> from London.</p>
                    </div>
                </div>
        );
    }
}