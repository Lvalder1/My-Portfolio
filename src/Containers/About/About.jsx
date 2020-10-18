import React, { Component } from "react";
import styles from "./About.module.scss";
import profile from "../../Images/Louis.png";

export default class About extends Component {
    render () {
        return (
            <div className={styles.about}>
                <h1>Hi I am <span>Louis Valder</span> I am a web developer!</h1>
                <div id={styles.aboutMe}>
                    <div className={styles.aboutMeLeft}>
                        <img src={profile} alt="Profile"></img>
                    </div>
                    <div className={styles.aboutMeRight}>
                        <p>I recently completed a 12 week, intensive course at _nology in front end web development, 
                        building interactive and responsive websites as well as web based applications. I am hardworking and friendly, whilst maintaining a professional 
                        attitude at all times. I am also highly practical and enjoy technical problem solving. For my next role I wish 
                        to better utilise my technical skills and problem solving within the coding industry.</p>
                    </div>
                </div>
            </div>
        );
    }
}