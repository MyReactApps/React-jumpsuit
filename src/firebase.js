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
    firebase.database().ref('list').on('value', (snapshot) => {
        var list = []
        snapshot.forEach((item) => {
            list.push({...item.val(), key: item.key})
        })
        Actions.setList(list);
    })

    firebase.auth().onAuthStateChanged((user) => {
        if(user){
            Actions.setUser(user);
        }
        else{
            Actions.setUser('');
        }
    })
}

Effect ('addToList', (text) => {
    firebase.database().ref("list").push({name: text})
    Actions.setInputText("");
})

Effect('removeFromList', (key) =>{
    firebase.database().ref('list/'+ key).remove();
})

Effect('googleLogin', () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
        var user = result.user;
    })
})