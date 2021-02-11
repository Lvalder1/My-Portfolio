import React, { Component } from 'react';
import styles from "./Navigation.module.scss";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.css';

export default class Navigation extends Component {
    render () {
      return (
        <Navbar expand="sm" className={styles.navbar}>
        <Navbar.Brand className={styles.brand}>
            <p id={styles.brandTop}>Louis Valder</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ml-20">
            <Nav.Link href="/" className={styles.navLink}>About</Nav.Link>
            <Nav.Link href="skills" className={styles.navLink}>Skills</Nav.Link>
            <Nav.Link href="projects" className={styles.navLink}>Projects</Nav.Link>
            <Nav.Link href="contact" className={styles.navLink}>Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
      );
    }
  }