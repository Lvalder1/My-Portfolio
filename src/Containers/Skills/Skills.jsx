import React, { Component } from "react";
import styles from "./Skills.module.scss";

export default class Skills extends Component {
    render () {
        return (
            <div className={styles.skills}>
                <div id={styles.skills}>
                    <h2>Technical Skills</h2>
                <div className={styles.skillsContainer}>
                    <div>
                        <h3 className={styles.skillsHeader}>Front-End</h3>
                        <p>HTML</p>
                        <p>CSS/SCSS</p>
                        <p>JavaScript</p>
                        <p>JQuery</p>
                        <p>React</p>
                        <p>Bootstrap</p>
                        <p>Wordpress</p>
                    </div>
                    <div>
                        <h3 className={styles.skillsHeader}>Tooling</h3>
                        <p>Git</p>
                        <p>Git Bash</p>
                        <p>GitHub</p>
                        <p>Enzyme</p>
                        <p>Test Driven Development</p>
                    </div>
                    <div>
                        <h3 className={styles.skillsHeader}>Back-End</h3>
                        <p>RESTful APIs</p>
                        <p>Firebase</p>
                        <p>Authentication (User Login, OAuth)</p>
                        <p>Databases (NoSQL)</p>
                    </div> 
                </div>
                </div>
            </div>
        );
    }
}