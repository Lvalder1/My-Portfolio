import React, { Component } from "react";
import styles from "./Project.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faWindowMaximize } from '@fortawesome/free-solid-svg-icons'

export default class Project extends Component {
    render () {
        return (
            <div className={styles.project} id="project">
                <div className={styles.projectArea}>
                    <h3>{this.props.heading}</h3>
                    <img src={this.props.imgSrc} alt={this.props.imgAlt} className={styles.projectImage}></img>
                    <div className={styles.icons}>
                        <div className={styles.iconTxt}>
                            <a href={this.props.code} className={styles.link} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faCode} className={styles.icon} />
                            <p>View on Github</p></a>
                        </div>
                        <div className={styles.iconTxt}>
                            <a href={this.props.link} className={styles.link} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWindowMaximize} className={styles.icon} />
                            <p>View the Project</p></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}