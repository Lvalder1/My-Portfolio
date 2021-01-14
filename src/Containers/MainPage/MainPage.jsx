import React, { Component } from 'react';
import styles from "./MainPage.module.scss";
import Navigation from "../../Components/Navigation";
import About from "../About";
import Skills from "../Skills";
import Projects from "../Projects";
import Contact from "../Contact";

export default class MainPage extends Component {
  render () {
    return (
      <div className={styles.mainpage}>
      <Navigation />
      <About />
      <Skills />
      <Projects />
      <Contact />
      </div>
    );
  }
}
