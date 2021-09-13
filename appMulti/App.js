import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: '',
      n1: '',
      n2: '',
      resultado: ''
    };
    
    this.calcular = this.calcular.bind(this);
  }
 
  calcular(){
    if ( (this.state.n1 === '') || (this.state.n2 === '') ){
      alert('Digite os dois valores!')
      return;
    }
    var r = this.state.n1 * this.state.n2
    this.setState({resultado: 'Resultado: ' + r});
  }
 
  render(){
    return(
      <View>

        <Text style={styles.titulo}> Multiplicador </Text>
 
      <TextInput
      style={styles.input}
      placeholder="1° número"
      onChangeText={ (texto) => this.setState({n1: texto})}
      />

      <TextInput
      style={styles.input}
      placeholder="2° número"
      onChangeText={ (texto) => this.setState({n2: texto})}
      />
 
      <Button  style={styles.botao} title="Calcular" onPress={this.calcular} />
 
      <Text style={styles.texto}> {this.state.resultado} </Text>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1,
  },

  titulo: {
    fontSize: 30,
    textAlign: 'center',
    margin: 40

  },

  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto:{
    textAlign: 'center',
    fontSize: 25,
    margin: 20
  }

  
})
 
export default App;