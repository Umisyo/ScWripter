import firebase from 'firebase'

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: 'AIzaSyBH9A5g8sVYh4WYx34tYNSu5F_mvb5TDe4',
        authDomain: 'scwripter.firebaseapp.com',
        databaseURL: 'https://scwripter.firebaseio.com',
        projectId: 'scwripter',
        storageBucket: '',
        messagingSenderId: '65025531199',
        appId: '1:65025531199:web:f97687cc1f5ba3da'
    })
}

export default firebase
