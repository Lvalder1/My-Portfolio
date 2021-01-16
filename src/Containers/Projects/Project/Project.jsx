import React, { Component } from "react";
import styles from "./Project.module.scss";

export default class Project extends Component {
    render () {
        return (
            <div className={styles.projects} id="projects">
                <h3>{this.props.heading}</h3>
                <div className={styles.projectArea}>
                    <div className={styles.project}>
                        <a href={this.props.link} target="_blank" rel="noopener noreferrer">
                            <img src={this.props.imgSrc} alt={this.props.imgAlt} className={styles.projectImage}></img>
                            <div className={styles.projectClick}>Click To View Project</div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}