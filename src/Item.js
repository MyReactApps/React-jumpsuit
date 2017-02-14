import React from 'react'
import { Component, Actions } from 'jumpsuit'

export default Component({
    render () {
        return (
            <li>{this.props.item.name}
                <a
                onClick={() => Actions.removeFromList(this.props.index)}
                >- </a>
            </li>
        )
    }
})