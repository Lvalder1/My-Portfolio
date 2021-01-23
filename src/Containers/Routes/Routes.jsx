import React, { Component } from "react";
import { Router } from "@reach/router";
import About from "../About";
import Skills from "../Skills";
import Projects from "../Projects";
import Contact from "../Contact";


const NotFound = () => (<h2>Not Found</h2>);

export default class Routes extends Component {
    render () {
        return (
            <>
                <Router>
                    <About path="/"  />
                    <Skills path="skills" />
                    <Projects path="projects" />
                    <Contact path="contact" />
                    <NotFound default />
                </Router>
            </>
        );
    }
} 