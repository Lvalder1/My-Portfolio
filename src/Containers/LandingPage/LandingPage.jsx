import React, { Component } from "react";
import styles from "./LandingPage.module.scss";
import ReactFullpage from "@fullpage/react-fullpage";
import About from "../About";
import Project from "../Projects/Project"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import RPS from "../../Images/rps.png";

export default class LandingPage extends Component {

    render() {
        return (
            <ReactFullpage
                scrollingSpeed={500}
                controlArrows={true}
                sectionsColor={['none', '#ff5f45', '#282c34']}
                anchors= {['firstpage', 'secondpage', 'thirdpage', 'fourthPage']}
                menu={['#Menu']}
                render={({ fullpageApi }) => {
                    return (
                        <>
                        <ul id="Menu" className={styles.menu}>
                            <li data-menuanchor="firstpage"><a href="#firstpage">Home</a></li>
                            <li data-menuanchor="secondpage"><a href="#secondpage">About</a></li>
                            <li data-menuanchor="thirdpage"><a href="#thirdpage">Projects</a></li>
                            <li data-menuanchor="fourthPage"><a href="#fourthPage">Fourth section</a></li>
                        </ul>
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
                                <div className="slide">
                                    <Project
                                      heading="Rock, Paper, Scissors"
                                      link="https://lvalder1.github.io/Rock-Paper-Scissors/"
                                      imgSrc={RPS} 
                                      imgAlt="Rock, Paper, Scissors"/>
                                </div>
                                <div className="slide">
                                    <h3>Hello</h3>
                                </div>
                            </div>
                        </ReactFullpage.Wrapper>
                        </>
                    );
                }}
            />
        );
    }
}
