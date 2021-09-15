import './App.css';
import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Sidebar from './layout/Sidebar'
import {connect} from "react-redux";
import Main from "./Main";
class App extends React.Component{

  render(){
    return (
        <BrowserRouter>
          <div className="App">
            <Sidebar/>
              <Main/>
          </div>
        </BrowserRouter>
    );
  }
}

export  default  App;
