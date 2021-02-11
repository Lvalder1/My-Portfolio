import React, { Component } from "react";
import styles from "./Project.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

export default class Project extends Component {
    render () {
        return (
            <div className={styles.project} id="project">
                <div className={styles.projectArea}>
                    <h3>{this.props.heading}</h3>
                    <img src={this.props.imgSrc} alt={this.props.imgAlt} className={styles.projectImage}></img>
                    <div className={styles.icons}>
                        <a href={this.props.code} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithubSquare} className={styles.icon} size="lg" /></a>
                    </div>
                </div>
            </div>
        );
    }
}