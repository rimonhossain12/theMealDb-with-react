import './App.css';
import About from './Component/About/About';
import Header from './Component/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Contact from './Component/Contact/Contact';
import NotFound from './Component/NotFound/NotFound';
import Food from './Component/Food/Food';
import SearchFood from './Component/SearchFood/SearchFood';


function App() {
  return (
    <div className="App">
          <BrowserRouter>
              <Navbar bg="light" expand="lg">
                  <Container>
                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse id="basic-navbar-nav">
                          <Nav className="me-auto">
                              <Nav.Link href="home">Home</Nav.Link>
                              <Nav.Link href="about">About</Nav.Link>
                              <Nav.Link href="food">SearchFood</Nav.Link>
                              <Nav.Link href="contact">contact</Nav.Link>
                          </Nav>
                      </Navbar.Collapse>
                  </Container>
              </Navbar>

              <Switch>
                  <Route exact path="/home">
                      <Header></Header>
                  </Route>
                  <Route exact path="/about">
                      <About></About>
                  </Route>
                  <Route path="/food">
                      <SearchFood></SearchFood>
                  </Route>
                  <Route exact path="/contact">
                      <Contact></Contact>
                  </Route>
                  <Route exact path="/">
                      <Food></Food>
                  </Route>
                  <Route exact="*">
                      <NotFound></NotFound>
                  </Route>
              </Switch>
          </BrowserRouter>
    </div>
  );
}

export default App;
