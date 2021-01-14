import React, { Component } from "react";
import styles from "./LandingPage.module.scss";
import ReactFullpage from "@fullpage/react-fullpage";
import MainPage from "../MainPage";
import { gsap } from 'gsap';
import { Back } from 'gsap/all';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default class LandingPage extends Component {

    constructor(props) {
        super(props); 
        this.myElement = [];
        this.myTween = gsap.timeline({delay:1.5});
    }

    componentDidMount() {
        this.myTween.to(this.myElement, {y: "-90%", duration: 1, ease: Back.easeOut.config(1.7)});
    }


    render() {
        return (
            <ReactFullpage
                scrollingSpeed={500} /* Options here */
                render={({ fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <div className="section">
                                <section className={styles.pagewrapper}>
                                        <h1>Hi I am <span>Louis Valder</span> I am a web developer!</h1>
                                    <div
                                        className={styles.footercontainer}
                                        onClick={() =>
                                            fullpageApi.moveSectionDown()
                                        }
                                        ref={div => this.myElement = div}
                                    >
                                        <p>Click To Learn More</p>
                                        <FontAwesomeIcon className={styles.fontAwesomeIcon} icon={faChevronDown} />
                                    </div>
                                </section>
                            </div>
                            <div className="section">
                                <MainPage />
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        );
    }
}
//     render() {
//         return (
//             <ReactFullpage
//                 scrollingSpeed={500} /* Options here */
//                 render={({ fullpageApi }) => {
//                     return (
//                         <ReactFullpage.Wrapper>
//                             <div className="section">
//                                 <section className={styles.landingPage}>
//                                     <div className={styles.bgImage}>
//                                         <div className={styles.imgWrapper}>
//                                             <h1>Hi I am <span>Louis Valder</span> I am a web developer!</h1>
//                                         </div>
//                                     </div>
//                                 </section>
//                                     <div
//                                         className={styles.footercontainer}
//                                         onClick={() =>
//                                             fullpageApi.moveSectionDown()
//                                         }
//                                         ref={div => this.myElement = div}
//                                     >
//                                         <p>Click to see more</p>
//                                         <FontAwesomeIcon className={styles.fontAwesomeIcon} icon={faChevronDown} />
//                                     </div>
//                             </div>
//                             <div className="section">
//                                 <MainPage />
//                             </div>   
//                         </ReactFullpage.Wrapper>
//                     );
//                 }}
//             />
//         );
//     }
// }
