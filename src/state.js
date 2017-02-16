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
    setInputText({list, ...rest}, text){
        return {
            ...rest,
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
