import React,{Component} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css" ;
import Header from './components/Header';
import BookList from "./components/BookList";
import Cart from './components/cart';
import Book from './components/Book';
import Home from './components/Home';
import Contact from './components/contact';
import {Redirect, Route } from 'react-router-dom';
import Checkout from './components/checkout'



export default class App extends Component {
  render(){
    return (
     
     <React.Fragment>
        <Header/>
      <Route exact path="/" component={Home} />
        <Route exact path="/books" component={Book} />
        <Route exact path="/products/:id" component={BookList} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
     
      
       </React.Fragment>
       );
  }
  }



