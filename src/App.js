import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componets/Header';
import Footer from './componets/Footer';
import Content from './componets/Content';
import SeeAll from './componets/SeeAll';
import UpComing from './componets/UpComing';
import Signin from './componets/Signin';
import RegisterPage from './componets/RegisterPage';

class App extends Component{
  
  render() {
  return (
    // <div style={{
    //     height: "100vh",
    //   }}
    // >
    <Router>
          <Header/>
          <Routes>
              <Route exact path = '/' element = {
                <Content/>
              }/>
              <Route exact path='/seeall' element={
              <SeeAll/>
              }/>

              <Route exact path='/upcoming' element={
              <UpComing/>
              
              }/>  

              <Route export path = '/signin' element = {
                <Signin/>
              }/>    
              <Route export path = '/register' element = {
                <RegisterPage/>
              }/>      
          </Routes>
          <Footer/>
    </Router>
    );
  }
}

export default App;
