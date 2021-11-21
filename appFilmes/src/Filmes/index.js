import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


class Filmes extends Component{
  render(){

  
    return (
      
      
        
        <View style={styles.card}>
          <Text style={styles.texto}>{this.props.data.nome}</Text>
          
            <TouchableOpacity style={styles.texto1}>
            <a href onClick={() => alert (this.props.data.sinopse)}>Leia mais...</a>
            </TouchableOpacity>
            <Image style={styles.image}
          source={{
              uri: `${this.props.data.foto}`}}
          />
          
          
        
        </View>
        
    )
  }
}
 
const styles = StyleSheet.create({
  card:{
    flex:1,
    shadowOffset: {width:0, height: 1},
    shadowOpacity: 0.8,
    margin: 15,
    shadowRadius: 5,
    borderRadius: 25,
    elevation: 3,
    padding:10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#011',
    width: '100%',   
    
  },
  texto: {
    
    fontWeight: 'bold',
    color: "#ff5",
    fontSize:24,
    fontFamily: 'Arial',
  },

  texto1: {
    
    fontWeight: 'bold',
    color: "#ff5",
    fontSize:15,
    fontFamily: 'Arial',
  },

  image: {
    
    flex:1,
    aspectRatio: 1.1,
    resizeMode: 'contain',
    width:800,
    height:450,
    shadowOffset: {width:10, height: 1},
    
   
    
    
    

  }
});
 
export default Filmes;