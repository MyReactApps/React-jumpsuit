import React from 'react';
import { Component } from 'jumpsuit'
import Item from './Item';
import InputForm from './inputform';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './Header';

import  './root'
export default Component( {
  render() {
    var {list, globalList} = this.props;
    return (
      <div className="container">
        <NavBar />
        <InputForm />
        <ul className="list-group">
          <h2>User List</h2>
          {
            list.map((item, index) =>(
              <Item item={item} key={item.key} />
            ))
          }
          <h2>Global List</h2>
          {
            globalList.map((item, index) =>(
              <Item item={item} key={item.key} />
            ))
          }
        </ul>
      </div>
    );
  }
}, (state) => {
  return {
    list: state.listState.list,
    globalList: state.listState.globalList
  }
})
