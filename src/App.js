import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm'

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: "AIzaSyDug7S02JsjGX29CFRBabcdTnlXBL-yMzQ",
            authDomain: "webpack-92a38.firebaseapp.com",
            databaseURL: "https://webpack-92a38.firebaseio.com",
            storageBucket: "webpack-92a38.appspot.com",
            messagingSenderId: "399018148090"
        }

        firebase.initializeApp(config)
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm/>
            </Provider>
        )
    }
}

export default App;