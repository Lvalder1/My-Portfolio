import React, { Component } from 'react'; 
import styles from "./Projects.module.scss";
import RPS from "../../Images/rps.png";
import CGP from "../../Images/CityGardenPlanting.png";
import Pokemon from "../../Images/Pokemon.png";
import TTT from "../../Images/TTT.png";
import MLB from "../../Images/MLB.png";
import Project from "../../Components/Project"; 
import Website from "../../Components/Website";


export default class Projects extends Component {

    render () {
        return (
            <div className={styles.projects}>
              <div className={styles.projectRow}>
                <div className={styles.project}>
                  <Project 
                          heading="Rock, Paper, Scissors"
                          link="https://lvalder1.github.io/Rock-Paper-Scissors/"
                          code="https://github.com/Lvalder1/Rock-Paper-Scissors"
                          imgSrc={RPS} 
                          imgAlt="Rock, Paper, Scissors"
                          description="This is a classic game of rock, paper scissors created using javascript that you can play against the computer."/>
                </div>
                <div className={styles.project}>
                  <Project 
                        heading="City Garden Planting"
                        link="http://citygardenplanting.co.uk/home"
                        code="https://github.com/Lvalder1/city-garden-planting"
                        imgSrc={CGP} 
                        imgAlt="City Garden Planting"
                        description="A solo build using React and Bootstrap for a client's garden design business."/>
                </div>
              </div>
              <div className={styles.projectRow}>
                <div className={styles.website}>
                <Website 
                          heading="My Little Boarders"
                          link="http://citygardenplanting.co.uk/home"
                          code="https://github.com/Lvalder1/city-garden-planting"
                          imgSrc={MLB} 
                          imgAlt="My Little Boarders"
                          description= "A website, that I am maintaining and updating for a client, that provides skateboarding lesson for children. The website is built using Wordpress and incorporates WooCommerce. "/>
              </div>
                <div className={styles.project}>
                  <Project 
                        heading="Tick-Tack-Toe"
                        link="https://lvalder1.github.io/Tick-Tack-Toe/"
                        code="https://github.com/Lvalder1/Tick-Tack-Toe"
                        imgSrc={TTT} 
                        imgAlt="Tick-Tack-Toe"
                        description="A 2 player game of Tick-Tack-Toe created using javascript"/>
                </div>
              </div>
              <div className={styles.projectRow}>
                <div className={styles.project}>
                  <Project 
                            heading="Pokemon"
                            link="https://pokemon-1-6d5d8.web.app/"
                            code="https://github.com/Lvalder1/pokemon"
                            imgSrc={Pokemon} 
                            imgAlt="Pokemon"
                            description="A react build that uses a firebase database to display information about various pokemon."/>
                </div>
              </div>
            </div>
    );
  }
}  