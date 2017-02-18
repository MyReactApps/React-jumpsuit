import firebase from 'firebase';
import { Actions, Effect } from 'jumpsuit'

var firebase_initialize = false;

var config = {
    apiKey: "AIzaSyAj_yP7cBLI3Bxbhcs1vo1ltPOO2ggwpIk",
    authDomain: "react-test-51dca.firebaseapp.com",
    databaseURL: "https://react-test-51dca.firebaseio.com"
};

export function initializeFirebase(){
    if(firebase_initialize){
        return;
    }
    firebase.initializeApp(config)
    firebase_initialize = true;

    subscribeToList('list', Actions.setGlobalList)
    
    firebase.auth().onAuthStateChanged((user) => {
        if(user){
            Actions.setUser(user);
            subscribeToList('users/' + user.uid, Actions.setList)
        }
        else{
            Actions.setUser('');
        }
    })
}

function subscribeToList(ref, action){
    firebase.database().ref(ref).on('value', (snapshot) => {
        var list = []
        snapshot.forEach((item) => {
            list.push({...item.val(), key: item.key})
        })
        action(list);
        console.log(list);
    })
}

Effect ('addToList', (args) => {
    firebase.database().ref(args[0]).push({name: args[1]})
    Actions.setInputText("");
})

Effect('removeFromList', ({key, userid}) =>{
    firebase.database().ref('list/' + key).remove();
    firebase.database().ref(['users', userid, key].join('/')).remove();
})

Effect('googleLogin', () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
        var user = result.user;
    })
})

Effect('logOut', () => {
    firebase.auth().signOut();
})