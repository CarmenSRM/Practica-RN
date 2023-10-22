import { StatusBar } from 'expo-status-bar'; 
import { Component } from 'react'; 
import { StyleSheet, View, Text, Button, Switch, TextInput, Alert} from 'react-native'; 

export default class App extends Component {  
  constructor(props) {
    super(props)
    this.state = {
      switchValue: false,
      textValue: '',
    }
  }

  // switch
  onChangeSwitch = (value) => {
    console.warn(`El switch cambiara a: ${value}`);
    this.setState({switchValue: value}) 
  }


  // textInput
  onChangeTextInput = (value) => {
    this.setState({textValue: value})
    console.log(`El valor del input es: ${value}`)
  }

  // button
  onPressLearnMore() {
    console.warn('Presionaste un boton');
  }

  showAlert () {
    Alert.alert(
      `${this.state.textValue}`,
      `${'Es lo que se escribió'}`,
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]
    );
  }
  

  render() {
    return (
      <View style={styles.container}>

        <TextInput 
          style={styles.input}
          onChangeText={(text)=> this.onChangeTextInput(text)}
          value = {this.state.textValue}
        />
        
        <Switch
          onValueChange={()=> this.onChangeSwitch(!this.state.switchValue)}
          value={this.state.switchValue}
        />
        
        <Button
          /*onPress={this.onPressLearnMore}*/
          onPress={this.showAlert.bind(this)}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

        <Text style={styles.welcome}>MyMusic - Carmen</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { //button
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
