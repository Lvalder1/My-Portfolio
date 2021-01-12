import React, { Component } from 'react';
import styles from "./Navigation.module.scss";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.css';

export default class Navigation extends Component {
    render () {
      return (
        <Navbar expand="sm" sticky="top">
        <Navbar.Brand className={styles.brand}>
            <p id={styles.brandTop}>Louis Valder</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ml-20">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
      );
    }
  }