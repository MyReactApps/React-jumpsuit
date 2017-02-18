import { Component, Actions} from 'jumpsuit';
import React from 'react';

export default Component ({
    render(){
        return(

        <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
            <a className="navbar-brand" href="#">
            
            </a>
            </div>
            <p className="navbar-text navbar-right">Signed in as
                <a href="#" className="navbar-link" onClick={() => Actions.logOut()}> {this.props.user.email}</a></p>
        </div>
        </nav>

 
        )
    }
},(state) => {
    return{
        user: state.listState.user 
    }
})