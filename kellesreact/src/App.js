import React from 'react';
import Header from './components/layout/Header'
import Footer from './components/layout/Footer';
import Home from './components/Content/Home';
import {BrowserRouter, Route} from 'react-router-dom';
import About from './components/Content/About';
import Contact from './components/Content/Contact';
import Gallery from './components/Content/Gallery';
import Prices from './components/Content/Prices';


function App() {
  return (
    <BrowserRouter>
    <div>
      
      <Header />
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact-us'component={Contact} />
      <Route path='/beauty-gallery' component={Gallery} />
      <Route path='/prices' component={Prices} />
      <Footer />
     
    </div>
    </BrowserRouter>
    
  );
}

export default App;
