import React, { Component } from "react";
import styles from "./Projects.module.scss";
import rps from "../../Images/rps.png";

export default class Projects extends Component {
    render () {
        return (
            <div className={styles.projects} id="projects">
                <h3>Projects</h3>
                <div className={styles.projectArea}>
                    <div className={styles.project}>
                        <a href="https://lvalder1.github.io/Rock-Paper-Scissors/" target="_blank" rel="noopener noreferrer">
                            <img src={rps} alt="Rock-Paper-Scissors" className={styles.projectImage}></img>
                            <div className={styles.projectName}>
                            Rock, Paper, Scissors!
                            </div>
                        </a>
                    </div>
                    <div className={styles.project}></div>
                    <div className={styles.project}></div>
                </div>
            </div>
        );
    }
}