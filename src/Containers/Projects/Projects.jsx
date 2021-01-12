import React, { Component } from "react";
import styles from "./Projects.module.scss";

export default class Projects extends Component {
    render () {
        return (
            <div className={styles.projects} id="projects">
                <h3>Projects</h3>
                <div className={styles.projectArea}>
                    <div className={styles.project}>
                        <div className={styles.projectName}>
                        Rock, Paper, Scissors!
                        </div>
                    </div>
                    <div className={styles.project}></div>
                    <div className={styles.project}></div>
                </div>
            </div>
        );
    }
}