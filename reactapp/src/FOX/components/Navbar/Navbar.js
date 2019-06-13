import React, { Component } from 'react';
import './Navbar.css';

class NavbarFox extends Component {

    klikZadace =() =>{
      window.location.replace("/KILO");
    }
    klikAnkete = () => {
      window.location.replace("/HOTEL");
    }
    klikStatistika = () => {
      window.location.replace("/LIMA");
    }
    klikRaspored = () => {
      window.location.replace("/UNIFORM");
    }
    klikChat = () => {
      window.location.replace("/JULIET");
    }
    klikForum = ()  => {
      window.location.replace("/TANGO");
    }
    render() {
      const x = "StranicaPredmeta?predmetId="+localStorage.getItem("NazivPredmeta");
      return (
        <div style={{
            backgroundColor: "#2C3E50",
            float: "left",
            minHeight: "100vh"
        }}>
        {/* <Navbar bg="primary" variant="dark" expand="lg">
          <Navbar.Brand href="/fox">FOX</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"> 
              <Nav.Link href="StranicaPredmeta?predmetId=Tehnike Programiranja">Student</Nav.Link>
              <NavDropdown bg="dark" title="Unos podataka" id="basic-nav-dropdown">
                <NavDropdown.Item href="unosPrisustva">Prisustvo</NavDropdown.Item>
                <NavDropdown.Item href="unosBodova">Ispiti</NavDropdown.Item>
                <NavDropdown.Item href="unosOcjene">Ocjene</NavDropdown.Item>
                <NavDropdown.Item href="unosTeme">Teme</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="ispiti">Ispiti</Nav.Link>
              <Nav.Link href="obavijesti">Obavijesti</Nav.Link>
              <Nav.Link href="zadace">Zadaće</Nav.Link>
              <Nav.Link href="ankete">Ankete</Nav.Link>
              <Nav.Link href="statistika">Statistika</Nav.Link>
              <Nav.Link href="raspored">Raspored</Nav.Link>
              <Nav.Link href="chat">Chat</Nav.Link>
              <Nav.Link href="forum">Forum</Nav.Link>
              <Nav.Link href="materijali">Materijali</Nav.Link>
            </Nav>
            <Nav className="mr-auto" className="justify-content-end">
              <Nav.Link href="https://www.iiicareer.com/OTS/Client/logout.php">Odjava</Nav.Link>
              <Nav.Link href="http://yiiisu.com/load.php?action=download&id=3">Uputstvo</Nav.Link>
            </Nav> 
          </Navbar.Collapse>
        </Navbar> */}

            <a href={x}>
              <button type="button" className="btn btn-primary left-buttons">Student</button>
            </a>

            <a href="unosPrisustva">
              <button type="button" className="btn btn-primary left-buttons">Unos prisustva</button>
            </a>

            <a href="unosBodova">
              <button type="button" className="btn btn-primary left-buttons">Unos bodova ispita</button>
            </a>

            <a href="unosOcjene">
              <button type="button" className="btn btn-primary left-buttons">Unos ocjene</button>
            </a>

            <a href="unosTeme">
              <button type="button" className="btn btn-primary left-buttons">Unos teme</button>
            </a>

            <a href="ispiti">
              <button type="button" className="btn btn-primary left-buttons">Ispiti</button>
            </a>

            <a href="obavijesti">
              <button type="button" className="btn btn-primary left-buttons">Obavijesti</button>
            </a>

            <a onClick={this.klikZadace}>
              <button type="button" className="btn btn-primary left-buttons">Zadaće</button>
            </a>

            <a onClick={this.klikAnkete}>
              <button type="button" className="btn btn-primary left-buttons">Ankete</button>
            </a>

            <a onClick={this.klikStatistika}>
              <button type="button" className="btn btn-primary left-buttons">Statistika</button>
            </a>

            <a onClick={this.klikRaspored}>
              <button type="button" className="btn btn-primary left-buttons">Raspored</button>
            </a>

            <a onClick={this.klikChat}>
              <button type="button" className="btn btn-primary left-buttons">Chat</button>
            </a>

            <a onClick={this.klikForum}>
              <button type="button" className="btn btn-primary left-buttons">Forum</button>
            </a>

            <a href="materijali">
              <button type="button" className="btn btn-primary left-buttons">Materijali</button>
            </a>

            <a href="http://yiiisu.com/load.php?action=download&id=3">
              <button type="button" className="btn btn-primary left-buttons">Uputstvo</button>
            </a>

            <a href="Romeo">
              <button type="button" className="btn btn-primary left-buttons">Odjava</button>
            </a>
            
        </div>
      );
    }
  }
  
  export default NavbarFox;