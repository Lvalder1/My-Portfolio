import React, { Component } from "react";
import styles from "./Website.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons';

export default class Website extends Component {
    render () {
        return (
            <div className={styles.website} id="website">
                <div className={styles.websiteArea}>
                    <h3>{this.props.heading}</h3>
                    <img src={this.props.imgSrc} alt={this.props.imgAlt} className={styles.websiteImage}></img>
                    <p className={styles.description}>{this.props.description}</p>
                    <div className={styles.icons}>
                        <div className={styles.iconTxt}>
                            <a href={this.props.link} className={styles.link} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWindowMaximize} className={styles.icon} />
                            <p>View the Website</p></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}