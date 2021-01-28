import React, { Component } from "react";
import styles from "./Contact.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileWord } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import CV from '../../Images/CVLouisValder.pdf';

export default class Contact extends Component {
    render () {
        return (
            <div className={styles.contact} id="contact">
                <h1>Contact</h1>
                <div className={styles.iconContactBox}>
                    <div className={styles.textBox}>
                        <a href="mailto:louis_valder@hotmail.co.uk"><FontAwesomeIcon icon={faEnvelope} className={styles.icon} size="lg" /></a>
                    </div>
                    <div className={styles.iconBox}>
                        <a href="https://www.linkedin.com/in/louisvalder/"><FontAwesomeIcon icon={faLinkedin} className={styles.icon} size="lg" /></a>
                    </div>
                    <div className={styles.iconBox}>
                        <a href="https://github.com/Lvalder1"><FontAwesomeIcon icon={faGithubSquare} className={styles.icon} size="lg" /></a>
                    </div>
                    <div className={styles.iconBox}>
                        <a href={CV} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFileWord} className={styles.icon} size="lg" /></a>
                    </div>
                </div>
            </div>
        );
    }
} 
