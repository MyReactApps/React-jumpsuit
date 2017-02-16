import React from 'react'
import { Component, Actions } from 'jumpsuit';

export default Component({
    onSubmit(event){
        event.preventDefault();
        Actions.addToList(this.props.input)
    },
    render(){
        return(
            <form
                className="form-group"
                onSubmit={this.onSubmit}>
                <label>Text</label>
                <input type='text'
                       className="form-control"
                       value={this.props.input}
                       onChange={(event) => {Actions.setInputText(event.target.value)}}
                    />
            </form>
            )}
}, (state) => {
    return  {
        input: state.listState.textInput
    }
})