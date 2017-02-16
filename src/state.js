import { State } from 'jumpsuit';

const listState = State({
    initial: {
        list: [{name: 'stuff'}],
        textInput: '',
        user: ''
    },
    setList({list, ...rest}, newList){
        return{
            ...rest,
            list: newList
        }
    },
    setInputText({list}, text){
        return {
            list,
            textInput: text
        }
    },
    setUser({user, ...rest}, newUser){
        return{
            ...rest,
            user: newUser
        }
    }
})

export const globalState = {
    listState: listState
}
