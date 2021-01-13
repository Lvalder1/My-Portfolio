import React, { Component } from "react";
import styles from "./LandingPage.module.scss";


export default class LandingPage extends Component {
    render () {
        return (
            <section className={styles.landingPage}>
                <div className={styles.bgImage}>
                    <div className={styles.imgWrapper}>
                        <h1>Hi I am <span>Louis Valder</span> I am a web developer!</h1>
                    </div>
                </div>
            </section>
        );
    }
}