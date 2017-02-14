import React from 'react'
import { Component } from 'jumpsuit'

export default Component({
    render () {
        return (
            <li>{this.props.item.name}</li>
        )
    }
})