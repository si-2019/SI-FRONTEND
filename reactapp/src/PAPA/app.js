import React from 'react';
import { Dashboard } from './Dashboard/DashboardComponent';
import './Dashboard/CommonCss.css';
import { blockStatement } from '@babel/types';

function App() {
  return (
    <div class="container-fluid">
      <Dashboard/>
    </div>
  );
}

const Header = () => (
  <div></div>
);



const Footer = () => (
  <div class="row">footer should go here</div>
);

export default App;
