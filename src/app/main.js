import React, { Component } from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

class App extends Component {

  render(){
    return (
      <div>

          <Header/>
          <Navigation/>
          <div id='container' className="wrapper"></div> {/* Wrapper */}
          <Footer/>
          
      </div>

    );
  }
}

render(<App/>, window.document.getElementById('main'));
