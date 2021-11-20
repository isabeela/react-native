import React from 'react';
import {View,Text, TouchableOpacity} from 'react-native';


import Home from '../Home';

import {styles} from '../../styles'



export default function Pessoal(){

    return(
        
        <View style={styles.container}>
         <View>

          {/*Barra do menu*/}
          <Home />
          
          </View>
          <View style={styles.viewtexto} >
            <Text style={styles.texto} >Pessoal</Text>
          </View>
          <View>
            <Text style={styles.info} >Nome completo: Isabela Baraldi Gandelman </Text>
            <Text style={styles.info} >Cidade: Santos </Text>
            <Text style={styles.info} >Faculdade: FATEC Rubens Lara</Text>
          </View>
      </View>

    )
}