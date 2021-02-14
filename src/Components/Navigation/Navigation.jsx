import React, { Component } from 'react';
import styles from "./Navigation.module.scss";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.css';


const NavItem = props => {
  const pageURI = window.location.pathname+window.location.search
  const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
  return (
    <li className={styles[liClassName]}>
      <a href={props.path}>
        {props.name}
        {(props.path === pageURI)}
      </a>
    </li>
  );
}

export default class Navigation extends Component {
    render () {
      return (
        <Navbar expand="sm" className={styles.navbar}>
        <Navbar.Brand className={styles.brand}>
            <p id={styles.brandTop}>Louis Valder</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className={styles.btn} />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ml-20">
            <NavItem path="/" name="About" />
            <NavItem path="/skills" name="Skills" />
            <NavItem path="/projects" name="Projects" />
            <NavItem path="/contact" name="Contact" />
            </Nav>
        </Navbar.Collapse>
        </Navbar>
      );
    }
  }