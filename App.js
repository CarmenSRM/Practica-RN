import { Component } from 'react';
import LoginView from './src/LoginView';
import HomeView from './src/HomeView';
import {Actions, Scene, Router} from 'react-native-router-flux'; 

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={LoginView} hideNavBar/>
    <Scene key="home" component={HomeView} hideNavBar/>
  </Scene>
)

//Revisar diapositiva 2 ante posible error 
export default class App extends Component {true  
  render() {
    return <Router scenes={scenes}/>
  }
}