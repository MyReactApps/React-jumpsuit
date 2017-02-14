import React from 'react';
import { Component, Actions } from 'jumpsuit'
import logo from './logo.svg';
import './App.css';
import Item from './Item';

export default Component( {
  onSubmit(event){
    event.preventDefault();
    Actions.addToList(this.props.input)
  },
  render() {
    var {list} = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <form
          onSubmit={this.onSubmit}
        >
        <input type='text'
          value={this.props.input}
          onChange={(event) => {Actions.setInputText(event.target.value)}}
         />
        </form>
        <ul>
          {
            list.map((item, index) =>(
              <Item item={item} key={index} />
            ))
          }
        </ul>
      </div>
    );
  }
}, (state) => {
  return {
    list: state.listState.list,
    input: state.listState.textInput
  }
})
