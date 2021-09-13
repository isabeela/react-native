
import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable} from 'react-native';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      contador: 0,
    };
    
    this.contar = this.contar.bind(this);
  }
 
  contar(sinal){
    if (sinal == '+'){
      this.setState({contador: this.state.contador + 1});
    }
    else if (this.state.contador > 0){
      this.setState({contador: this.state.contador - 1});
    }
  }
 
  render(){
    return(
      <View>
 
        <Text style={styles.titulo}>Contador de Pessoas</Text>

        <Text style={styles.texto}> {this.state.contador} </Text>

        <View style={styles.alinharBotao}>
        <Pressable style={[styles.botao, {backgroundColor: 'green'}]} onPress={() => {this.contar('+')}}>
          <Text style={styles.textoBotao}>+</Text>
        </Pressable>

        <Pressable style={[styles.botao, {backgroundColor: 'red'}]} onPress={() => {this.contar('-')}}>
          <Text style={styles.textoBotao}>-</Text>
        </Pressable>
 
        </View>

       
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  titulo:{
    textAlign: 'center',
    fontSize: 30,
    paddingTop: 30
  },
  botao:{
    width: 50,
    height: 50,
    marginTop: 20,
    marginStart: 50,
    borderRadius: 50,
  },
  textoBotao:{
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 45,
    fontSize: 32,
    color: '#fff'
  },
  texto:{
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 32,
    paddingTop: 30,
  },

  alinharBotao: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginStart: -50
  },

})
 
export default App;

