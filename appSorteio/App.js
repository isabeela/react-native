import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button} from 'react-native';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      resultado: ''
    };
    
    this.mostrar = this.mostrar.bind(this);
  }
 
  mostrar(){
   var num = Math.floor(Math.random() * 10);
   this.setState ({resultado: `O número sorteado foi ${num}`})
   
  }

  render(){
    let img = "https://sorteios.org/wp-content/uploads/2018/11/numeros-aleatorios.jpg";

    return(
      <View>

      <Text style={styles.titulo}>  Números aleatórios </Text>

      <Image
          source={{ uri: img }}
          style={styles.imag}
        />
 
 
      <Button  title="Sortear Numero" onPress={this.mostrar} />
 
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
    margin: 20
  },

  imag: {
    width: 250, 
    height: 250, 
    margin: 50
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