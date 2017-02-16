import React from 'react';
import { Render } from 'jumpsuit';
import App from './App';
import Login from './login';
import './index.css';
import  './root'
import { globalState } from './state'
import { initializeFirebase } from './firebase'

initializeFirebase();
Render(globalState, globalState.listState.user ?  <App /> : <Login /> );
