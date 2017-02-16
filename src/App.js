import React from 'react';
import { Component } from 'jumpsuit'
import Item from './Item';
import InputForm from './inputform';
import 'bootstrap/dist/css/bootstrap.css';

import  './root'
export default Component( {
  render() {
    var {list} = this.props;
    return (
      <div className="container">
        <InputForm />
        <ul className="list-group">
          {
            list.map((item, index) =>(
              <Item item={item} key={item.key} />
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
