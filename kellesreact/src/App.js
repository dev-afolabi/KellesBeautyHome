import React from 'react';
import Header from './components/layout/Header'
import Footer from './components/layout/Footer';
import Home from './components/Content/Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import About from './components/Content/About';
import Contact from './components/Content/Contact';
import Gallery from './components/Content/Gallery';
import Prices from './components/Content/Prices';
import Bookings from './components/reservations/Bookings';
import StartBooking from './components/reservations/StartBooking';


function App() {
  return (
    <BrowserRouter>
    <div>
      
      <Header />
      <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/beauty-gallery' component={Gallery} />
      <Route path='/contact-us'component={Contact} />
      <Route path='/prices' component={Prices} />
      <Route path='/make-reservation' component={Bookings} />
      <Route path='/book-reservation' component={StartBooking} />
      </Switch>
      <Footer />
     
    </div>
    </BrowserRouter>
    
  );
}

export default App;
