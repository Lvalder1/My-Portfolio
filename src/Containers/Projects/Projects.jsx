import React, { Component } from 'react'; 
import styles from "./Projects.module.scss";
import RPS from "../../Images/rps.png";
import Project from "../../Components/Project"; 

export default class Projects extends Component {

    render () {
        return (
            <div className={styles.projects}>
              <div className={styles.project}>
                <Project 
                        link="https://lvalder1.github.io/Rock-Paper-Scissors/"
                        code="https://github.com/Lvalder1/Rock-Paper-Scissors"
                        imgSrc={RPS} 
                        imgAlt="Rock, Paper, Scissors"
                        description="This is a classic game of rock, paper scissors created using javascript that you can play against the computer."/>
              </div>
              <div className={styles.project}>
              <Project 
                      link="https://lvalder1.github.io/Rock-Paper-Scissors/"
                      code="https://github.com/Lvalder1/Rock-Paper-Scissors"
                      imgSrc={RPS} 
                      imgAlt="Rock, Paper, Scissors"
                      description="This is a classic game of rock, paper scissors created using javascript that you can play against the computer."/>
              </div>
              <div className={styles.project}>
              <Project 
                      link="https://lvalder1.github.io/Rock-Paper-Scissors/"
                      code="https://github.com/Lvalder1/Rock-Paper-Scissors"
                      imgSrc={RPS} 
                      imgAlt="Rock, Paper, Scissors"
                      description="This is a classic game of rock, paper scissors created using javascript that you can play against the computer."/>
              </div>
              <div className={styles.project}>
              <Project 
                      link="https://lvalder1.github.io/Rock-Paper-Scissors/"
                      code="https://github.com/Lvalder1/Rock-Paper-Scissors"
                      imgSrc={RPS} 
                      imgAlt="Rock, Paper, Scissors"
                      description="This is a classic game of rock, paper scissors created using javascript that you can play against the computer."/>
              </div>
              <div className={styles.project}>
              <Project 
                      link="https://lvalder1.github.io/Rock-Paper-Scissors/"
                      code="https://github.com/Lvalder1/Rock-Paper-Scissors"
                      imgSrc={RPS} 
                      imgAlt="Rock, Paper, Scissors"
                      description="This is a classic game of rock, paper scissors created using javascript that you can play against the computer."/>
              </div>
            </div>
    );
  }
}  