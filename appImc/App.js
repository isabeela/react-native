import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button} from 'react-native';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      peso: '',
      altura: '',
      resultado: ''
    };
    
    this.calcular = this.calcular.bind(this);
  }
 
  calcular(){
    if ( (this.state.peso === '' || this.state.peso == 0) || (this.state.altura === '' ||  this.state.altura == 0) ){
      alert('Os campos não podem ficar vazios  e tem que ser diferentes de zero')
      return;
    }
    var calc  = this.state.peso  / (this.state.altura * this.state.altura)

    if ((calc < 18.5)) {
          this.setState ({ resultado: 'Você está abaixo do peso'})
       } else if ((calc >= 18.5 && calc <= 24.99)) {
          this.setState ({resultado: 'Seu peso está normal'})
        } else if (( calc >= 25 && calc <= 29.99)) {
          this.setState ({resultado: 'Você está com sobrepeso'})
        } else if (( calc >= 30 && calc <= 34.99)) {
          this.setState ({resultado: 'Você está com obesidade grau 1'})
        } else if (( calc >= 35 && calc <= 39.99)) {
          this.setState ({resultado: 'Você está com obesidade grau 2'})
        } else {
          this.setState ({resultado: 'Você está com obesidade grau 3'})
        }
    
  }

  render(){
    let img = "https://conteudo.imguol.com.br/c/entretenimento/87/2020/10/28/balanca-peso-1603920684761_v2_450x337.jpg";

    return(
      <View>


      <Text style={styles.titulo}>  Cálculo IMC </Text>

      <Image
          source={{ uri: img }}
          style={styles.imag}
        />
 
      <TextInput
      style={styles.input}
      placeholder="Peso"
      onChangeText={ (texto) => this.setState({peso: texto})}
      />

      <TextInput
      style={styles.input}
      placeholder="Altura"
      onChangeText={ (texto) => this.setState({altura: texto})}
      />
 
      <Button  title="Calcular" onPress={this.calcular} />
 
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