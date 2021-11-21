import * as React from 'react';
import { View, Text, Button,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Movie from './src/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Filmes from './src/Filmes';

function DetailsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.navigate('Details')}
        />
  
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  text: {
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold'
  }
});