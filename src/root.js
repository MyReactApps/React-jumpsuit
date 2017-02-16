import React from 'react';
import { Render } from 'jumpsuit';

import './index.css';
import  './root'
import { globalState } from './state'
import { initializeFirebase } from './firebase'
import Auth from './Auth';

initializeFirebase();
Render(globalState, <Auth /> );
