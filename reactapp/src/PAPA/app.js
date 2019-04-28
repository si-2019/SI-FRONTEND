import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import { Dashboard } from './Components/Dashboard/DashboardComponent';
import './Components/Dashboard/CommonCss.css';
import { blockStatement } from '@babel/types';

function app() {
  return (
    <div class="container-fluid">
      <Header/>
      <Dashboard/>
      <Footer/>
    </div>
  );
}

const Header = () => (
  <div></div>
);



const Footer = () => (
  <div class="row">footer should go here</div>
);

export default app;
