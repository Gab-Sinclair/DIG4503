import React from 'react';
import HomePage from "./componets/HomePage";
import logo, { ReactComponent } from './logo.svg';
import './App.css';


class App extends React.Component{
      render(){
        return(<HomePage firstName="Gabby"/>);
      }
}

export default App;
