import React from 'react';
import {View,Text, TouchableOpacity} from 'react-native';

import Home from '../Home';

import {styles} from '../../styles'

 

export default function Formacao(){
    return(

       
      <View style={styles.container}>
      <View>

       {/*Barra do menu*/}
       <Home />
       
       </View>
       <View style={styles.viewtexto} >
         <Text style={styles.texto} >Formacão</Text>
       </View>
       <View>
         <Text style={styles.info} >Faculdade atual: FATEC Rubens Lara</Text>
       </View>
   </View>

      
    )
}