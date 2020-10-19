import React, { Component } from "react";
import styles from "./Skills.module.scss";

export default class Skills extends Component {
    render () {
        return (
            <div className={styles.skills}>
                <div id="skills"><h3>Technical Skills</h3></div>
                <div className={styles.skillsContainer}>
                    <div>
                        <p>HTML</p>
                        <p>CSS/SCSS</p>
                        <p>JavaScript</p>
                        <p>JQuery</p>
                        <p>React</p>
                    </div>
                    <div>
                        <p>Databases(NoSQL)</p>
                        <p>API's</p>
                        <p>Agile Working</p>
                    </div>
                    <div>
                        <p>Git Bash</p>
                        <p>GitHub</p>
                        <p>Enzyme</p>
                        <p>Test Driven Development</p>
                        <p>Authentication</p>
                    </div> 
                </div>
            </div>
        );
    }
}