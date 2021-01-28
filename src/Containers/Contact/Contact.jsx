import React, { Component } from "react";
import styles from "./Contact.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default class Contact extends Component {
    render () {
        return (
            <div className={styles.contact} id="contact">
                <h1>Contact</h1>
                <div className={styles.iconContactBox}>
                    <div className={styles.iconBox}>
                        <FontAwesomeIcon icon={faCoffee} />
                    </div>
                    <div className={styles.textBox}>
                        <a href="mailto:louis_valder@hotmail.co.uk"><h2>louis_valder@hotmail.co.uk</h2></a>
                    </div>
                    <div className={styles.iconBox}>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                    <div className={styles.textBox}>
                        <a href="mailto:louis_valder@hotmail.co.uk"><h2>louis_valder@hotmail.co.uk</h2></a>
                    </div>
                    <div className={styles.iconBox}>
                        <FontAwesomeIcon icon={faCoffee} />
                    </div>
                    <div className={styles.textBox}>
                        <a href="mailto:louis_valder@hotmail.co.uk"><h2>louis_valder@hotmail.co.uk</h2></a>
                    </div>
                </div>
            </div>
        );
    }
} 
