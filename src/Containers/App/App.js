import React, { Component } from 'react';
import styles from "./App.module.scss";
import Navigation from "../../Components/Navigation";
import About from "../About";
import Skills from "../Skills";

export default class App extends Component {
  render () {
    return (
      <div className={styles.app}>
      <Navigation />
      <About />
      <Skills />
      </div>
    );
  }
}


