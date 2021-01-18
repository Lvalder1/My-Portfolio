import React, { Component } from 'react'; 
import RPS from "../../Images/rps.png";
import Project from "../../Components/Project"; 

export default class Projects extends Component {

    render () {
        return (
            <>
                <Project
                        heading="Rock, Paper, Scissors"
                        link="https://lvalder1.github.io/Rock-Paper-Scissors/"
                        imgSrc={RPS} 
                        imgAlt="Rock, Paper, Scissors"/>
            </>
    );
  }
}  