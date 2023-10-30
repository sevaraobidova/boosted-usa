import './App.css';
import React from 'react';
import Button from './components/Button';
import Header from './components/Header';
import Showcase from './components/Showcase';
import Partners from './components/Partners';
import Shop from './components/Shop';
import Showcases from './components/Skateboard';
import Rev from './components/Rev';
import ShopPlus from './components/ShopPlus';
import YouTube from './components/YouTube';
import Swipers from './components/Swiper';
import BeforeFooter from './components/BeforeFooter';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Showcase />
      <Partners />
      <Shop />
      <Showcases />
      <Rev />
      <ShopPlus />
      <YouTube />
      <Swipers />
      <BeforeFooter />
      <Footer />
    </div>
  );
}

export default App;
