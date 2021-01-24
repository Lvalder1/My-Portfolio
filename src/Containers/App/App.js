import React, { Component } from 'react';
import styles from "./App.module.scss";
import Navigation from "../../Components/Navigation";
import Routes from "../Routes/Routes";

export default class App extends Component {
  render () {
    return (
      <div className={styles.app} id={styles.app}>
          <Navigation />
        <Routes />
      </div>
    );
  }
}


