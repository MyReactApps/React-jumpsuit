import React from 'react';
import { Render, State } from 'jumpsuit';
import App from './App';
import './index.css';

const listState = State({
  initial: {
    list: [{name: 'stuff'}],
    textInput: ''
  },
  addToList({list}, text) {
    return {
      list:  [...list, {name: text}],
      textInput: ''
    }
  },
  setInputText({list}, text){
    return {
      list,
      textInput: text
    }
  }
})

const globalState = {
  listState: listState
}

Render(globalState,<App />);
