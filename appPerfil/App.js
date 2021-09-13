import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
 
class App extends Component{
  render(){

    let nome = 'Isabela B. Gandelman';
    let img = 'https://avatars.githubusercontent.com/u/31148780?v=4';
    let descric = 'Formada em Análise e Desenvolvimento de Sistemas pela Fatec Rubens Lara, Isabela está realizando a sua segunda graduação, também pela Fatec, cursando Sistemas para Internet';

    return(
      <View style={{backgroundColor: '#f7faf8'}}>
    
        <Text style={{color: '#000', fontSize: 30, margin: 35}}>
        {nome}
        </Text>

        <Image
          source={{ uri: img }}
          style={{ width: 250, height: 250, margin: 50, borderRadius: 500, boxShadow: "10px 5px 10px #9E9E9E"}}
        />

        <Text style={{fontSize: 18, padding: 15}}> {descric} </Text>
 

      </View>
    )
  }
}
 
export default App;
