import React from 'react'
import { Component, Actions } from 'jumpsuit'

export default Component({
    render () {
        var {item, user} = this.props;
        return (
            <li className="list-group-item">{item.name}
                <a
                onClick={() => Actions.removeFromList({key: item.key, userid: user.uid})}
                >
                    <span className="glyphicon glyphicon-remove pull-right"></span>
                </a>
            </li>
        )
    }
}, (state) =>{
    return {
        user: state.listState.user
    }
})