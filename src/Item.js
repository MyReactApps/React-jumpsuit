import React from 'react'
import { Component, Actions } from 'jumpsuit'

export default Component({
    render () {
        var {item} = this.props;
        return (
            <li className="list-group-item">{item.name}
                <a
                onClick={() => Actions.removeFromList(item.key)}
                >
                    <span className="glyphicon glyphicon-remove pull-right"></span>
                </a>
            </li>
        )
    }
})