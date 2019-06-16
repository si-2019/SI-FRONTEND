import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Alpha from './ALPHA/app.js'
import Beta from './BETA/app.js'
import Charlie from './CHARLIE/app.js'
import Delta from './DELTA/app.js'
import Echo from './ECHO/app.js'
import Fox from './FOX/components/App/app.js'
import Golf from './GOLF/app.js'
import Hotel from './HOTEL/app.js'
import India from './INDIA/app.js'
import Juliet from './JULIET/app.js'
import Kilo from './KILO/app.js'
import Lima from './LIMA/app.js'
import Mike from './MIKE/app.js'
import November from './NOVEMBER/app.js'
import Oscar from './OSCAR/app.js'
import Papa from './PAPA/app.js'
import Romeo from './ROMEO/app.js'
import Siera from './SIERA/app.js'
import Tango from './TANGO/app.js'
import Uniform from './UNIFORM/app.js'
import Header from './header'
import Footer from './footer'



class App extends Component {
  render() {
    return (
      <Router>
          <Header />
          <div >
            <Route exact path="/" component={Alpha} />
            <Route path="/Administrator" component={Alpha} />
            <Route exact path="/Student support" component={Beta} />
            <Route path="/Ispiti" component={Charlie} />
            <Route path="/Predmeti" component={Delta} />
            <Route path="/Akademski kalendar" component={Echo} />
            <Route path="/Profesori" component={Fox} />
            <Route path="/Materijali" component={Golf} />
            <Route path="/Ankete" component={Hotel} />
            <Route path="/india" component={India} />
            <Route path="/Chat" component={Juliet} />
            <Route path="/Zadace" component={Kilo} />
            <Route path="/Izvjestaji" component={Lima} />
            <Route path="/Kolabracija" component={Mike} />
            <Route path="/november" component={November} />
            <Route path="/oscar" component={Oscar} />
            <Route path="/Dashboard" component={Papa} />
            <Route path="/Romeo" component={Romeo} />
            <Route path="/Studenti" component={Siera} />
            <Route path="/Forum" component={Tango} />
            <Route path="/Raspored" component={Uniform} />
            
          </div>
          <Footer/>
      </Router>
    );
  }
}

export default App;
