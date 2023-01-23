import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    //html code
    <Navbar  variant="dark">
    <Container>
      <Navbar.Brand href="/">
        <img
          alt="no img"
          src="https://www.bing.com/th/id/OGC.ccbf5e418d64c002d67cd4ccad77f9e6?pid=1.7&rurl=https%3a%2f%2fmedia1.giphy.com%2fmedia%2flTczzrPnXCPetZyTSO%2fgiphy.gif&ehk=rnllqQ5%2bAkac9XIcOY8LgW2DF%2bf8otFsdNnsNWqX6Q4%3d"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '} &nbsp;
        Gastro Beni
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header
