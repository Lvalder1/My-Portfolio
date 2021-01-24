import React, { Component } from "react";
import styles from "./Contact.module.scss";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Contact extends Component {
    render () {
        return (
            <div className={styles.contact} id="contact">
                <h1>Contact</h1>
                <div className={styles.iconContactBox}>
                    <div className={styles.iconBox}>
                        {/* <FontAwesomeIcon /> */}
                    </div>
                    <div className={styles.textBox}>
                        <a href="mailto:louis_valder@hotmail.co.uk"><h2>louis_valder@hotmail.co.uk</h2></a>
                    </div>
                </div>
            </div>
        );
    }
} 
