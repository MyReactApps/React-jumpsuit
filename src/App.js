import React from 'react';
import { Component, Actions } from 'jumpsuit'
import logo from './logo.svg';
import './App.css';
import Item from './Item';
import InputForm from './inputform'

import  './root'
export default Component( {
  render() {
    var {list} = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <InputForm />
        <ul>
          {
            list.map((item, index) =>(
              <Item item={item} key={index} index={index} />
            ))
          }
        </ul>
      </div>
    );
  }
}, (state) => {
  return {
    list: state.listState.list
  }
})
