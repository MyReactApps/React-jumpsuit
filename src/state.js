import { State } from 'jumpsuit';

const listState = State({
    initial: {
        list: [],
        globalList: [],
        textInput: '',
        user: '',
        useGlobal: false
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
    setGlobalList({globalList, ...rest}, newList){
        return{
            ...rest,
            globalList: newList
        }
    },
    setUser({user, ...rest}, newUser){
        return{
            ...rest,
            user: newUser
        }
    },
    toggleGlobalState({useGlobal, ...rest}){
        return {
            ...rest,
            useGlobal: !useGlobal
        }
    }
})

export const globalState = {
    listState: listState
}
