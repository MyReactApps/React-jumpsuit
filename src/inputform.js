import React from 'react'
import { Component, Actions } from 'jumpsuit';

export default Component({
    onSubmit(event){
        event.preventDefault();
        let ref = this.props.useGlobal ? "list" : "users/" + this.props.user.uid
        Actions.addToList([ref, this.props.input])
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
                <button onClick={Actions.toggleGlobalState} type="button" className={this.props.useGlobal ? "btn btn-primary" : "btn btn-default"}>Use Global</button>
            </form>
            )}
}, (state) => {
    return  {
        input: state.listState.textInput,
        user: state.listState.user,
        useGlobal: state.listState.useGlobal
    }
})