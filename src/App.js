import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: "John Fleischli",
      headerLinks: [
        { title: 'Home', pather: '/'},
        { title: 'Unreal', pather: '/unreal'},
        { title: 'Contact', pather: '/contact'},
      ],
      home: {
        title: 'John Fleischli\'s Developer Portfolio',
        subTitle: 'subTitle text',
        text: 'Checkout my projects'
      },
      unreal: {
        title: 'Unreal Engine 4 Projects',
      },
      contact: {
        title: 'Contact Me',
      }
    }
  }

  render () {
    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>John Fleischli</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/unreal">Unreal</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>


          <img src="/images/minish_cap_link.png" alt="link"/>
        </Container>
      </Router>
      );
  }

}

export default App;
