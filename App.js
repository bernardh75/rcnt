import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';

import * as firebase from 'firebase';  
import { createTransformer } from 'babel-jest';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB1FZD3nuH79CU2WZagdvNCNXL0t5wwBtQ",
  authDomain: "ecoxygen-a32b5.firebaseapp.com",
  databaseURL: "https://ecoxygen-a32b5.firebaseio.com",
  projectId: "ecoxygen-a32b5",
  storageBucket: "ecoxygen-a32b5.appspot.com",
  messagingSenderId: "963207595042",
  appId: "1:963207595042:web:35602013bc981bc502767b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: HomeScreen
})

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen 
})

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  ) 
)