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
                        <p className={styles.aboutTxt}>Hi, I'm Louis Valder, a front-end web developer from London. <br></br>
                            I worked for 6 years in the Audio Visual industry before embarking on a complete career change to become a developer. 
                            I recently completed a self-funded coding bootcamp followed by some freelance development work. I am now looking 
                            to start a career to as a web developer.</p>
                    </div>
                </div>
        );
    }
}