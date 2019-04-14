import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import MainContent from './components/mainContent'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;
