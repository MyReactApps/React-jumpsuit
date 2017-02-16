import React from 'react'
import { Component} from 'jumpsuit';
import App from './App';
import Login from './login';

export default Component({
    render(){
        var {user} = this.props
        return user ?  <App /> : <Login />
    }
    },(state) => {
    return {
        user: state.listState.user
    }
})