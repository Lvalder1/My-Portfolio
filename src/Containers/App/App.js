import React, { Component } from 'react';
import styles from "./App.module.scss";
import LandingPage from "../LandingPage";

export default class App extends Component {
  render () {
    return (
      <div className={styles.app}>
      <LandingPage />
      </div>
    );
  }
}


