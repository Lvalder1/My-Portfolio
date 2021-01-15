import React, { Component } from "react";
import styles from "./LandingPage.module.scss";
import ReactFullpage from "@fullpage/react-fullpage";
import About from "../About";
import Projects from "../Projects"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default class LandingPage extends Component {

    render() {
        return (
            <ReactFullpage
                scrollingSpeed={500}
                render={({ fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <div className="section">
                                <section className={styles.pageContainer}>
                                    <div className={styles.pageWrapper}>
                                            <h1>Hi I am <span>Louis Valder</span> I am a web developer!</h1>
                                    </div>
                                        <div
                                            className={styles.footerContainer}
                                            onClick={() =>
                                                fullpageApi.moveSectionDown()}>
                                            <p>Click To Learn More</p>
                                            <FontAwesomeIcon className={styles.fontAwesomeIcon} icon={faChevronDown} />
                                        </div>
                                    
                                </section>
                            </div>
                            <div className="section">
                                <About />
                            </div>
                            <div className="section">
                                <Projects />
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        );
    }
}
