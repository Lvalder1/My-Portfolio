import React, { Component } from 'react';
import styles from "./App.module.scss";
import Navigation from "../Components/Navigation";

export default class App extends Component {
  render () {
    return (
      <div className={styles.app}><p>Hello</p>
      <Navigation />
      </div>
    );
  }
}


