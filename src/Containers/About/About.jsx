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
                        <p className={styles.aboutTxt}>Hi, I am Louis Valder a front-end web developer from London. Before becoming a developer I worked for 6 years
                         in the Audio Visual industry before embarking on a complete career change. I have completed a coding bootcamp and
                        I am now ready to start a career as a web developer.</p>
                    </div>
                </div>
        );
    }
}