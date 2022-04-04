import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Faq from './components/Faq';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Faq />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);