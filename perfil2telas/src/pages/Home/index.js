import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

 
import FontAwesome from 'react-native-vector-icons/FontAwesome';
 
 
export default function Home() {
  const navigation = useNavigation();
 return (
   <View>
      <TouchableOpacity style={{ backgroundColor:'#91c5ff', padding: 20}} onPress={ () => navigation.toggleDrawer() }>
        <FontAwesome name='bars' size={25} color='#fff' />
      </TouchableOpacity>

   </View>
  );
}