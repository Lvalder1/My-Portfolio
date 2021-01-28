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
                <div className={styles.iconContactBox}>
                    <h1>Contact</h1>
                        <p>Please feel free to contact me using the links bellow:</p>
                    <div className={styles.contactLinks}>    
                        <div className={styles.textBox}>
                            <a href="mailto:louis_valder@hotmail.co.uk"><FontAwesomeIcon icon={faEnvelope} className={styles.icon} size="lg" /></a>
                            <a href="mailto:louis_valder@hotmail.co.uk">louis_valder@hotmail.co.uk</a>
                        </div>
                        <div className={styles.textBox}>
                            <a href="https://www.linkedin.com/in/louisvalder/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className={styles.icon} size="lg" /></a>
                            <a href="linkedin.com/in/louisvalder/" target="_blank" rel="noopener noreferrer">linkedin.com/in/louisvalder/</a>
                        </div>
                        <div className={styles.textBox}>
                            <a href="https://github.com/Lvalder1" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithubSquare} className={styles.icon} size="lg" /></a>
                            <a href="github.com/Lvalder1" target="_blank" rel="noopener noreferrer">github.com/Lvalder1</a>
                        </div>
                        <div className={styles.textBox}>
                            <a href={CV} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFileWord} className={styles.icon} size="lg" /></a>
                            <a href={CV} target="_blank" rel="noopener noreferrer">CV</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
} 
