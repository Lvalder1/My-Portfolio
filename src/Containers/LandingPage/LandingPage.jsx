import React, { Component } from "react";
import styles from "./LandingPage.module.scss";
import ReactFullpage from "@fullpage/react-fullpage";

export default class LandingPage extends Component {

    render() {
        return (
            <ReactFullpage
                scrollingSpeed={500} /* Options here */
                render={({ fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <div className="section">
                                <section className={styles.landingPage}>
                                    <div className={styles.bgImage}>
                                        <div className={styles.imgWrapper}>
                                            <h1>Hi I am <span>Louis Valder</span> I am a web developer!</h1>
                                        </div>
                                    </div>
                                </section>
                                <button onClick={() => fullpageApi.moveSectionDown()}>
                                Click me to move down
                                </button>
                            </div>
                            <div className="section">
                                <p>Section 2</p>
                            </div>   
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        );
    }
}
