import React from 'react';
import { Render, State } from 'jumpsuit';
import App from './App';
import './index.css';
import  './root'

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
  },
  removeFromList({list, textInput}, index){
        return {
            list: [
                ...list.slice(0, index),
                ...list.slice(index + 1)
            ],
            textInput
        }
  }
})

const globalState = {
  listState: listState
}

Render(globalState,<App />);
