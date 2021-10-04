// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="page-container">
        <div className="content-wrap">

          <Router>
            <Header></Header>


            <Switch>

              <Route exact path="/home">
                <Home></Home>
              </Route>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/about">
                <About></About>
              </Route>
              <Route path="/services">
                <Services></Services>
              </Route>
              <Route path="/contact">
                <Contact></Contact>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>

            </Switch>

          </Router>
        </div>
        <Footer></Footer>
      </div>

    </div>
  );
}

export default App;
