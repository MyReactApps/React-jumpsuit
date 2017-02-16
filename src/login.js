import { Component, Actions} from 'jumpsuit';
import 'font-awesome/css/font-awesome.css'
import 'bootstrap-social/bootstrap-social.css'
import React from 'react';

export default Component ({
    render(){
        return(
            <div>

                <a
                    onClick={() => Actions.googleLogin()}
                    className="btn btn-block btn-social btn-google">
                <span className="fa fa-google"></span>Sign in
                </a>
            </div>
        )
    }
})