import React,  {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Modal, Image, Button} from 'react-native';
import {Camera} from 'expo-camera';
import {FontAwesome} from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';





export default function App() {

  const camRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [fotoCapturada, setFotoCapturada] = useState(null);
  const [open, setOpen] = useState(false);

  const [imagem, setImagem] = useState(null);

  const selImagem = async()=>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes : ImagePicker.MediaTypeOptions.Images,
      allowEditing : true,
    })

    if(!result.cancelled){
      setImagem(result.uri)
    }
  }  


  

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);



  if (hasPermission ===  null) {
    return <View/>;
    }
  if (hasPermission === false) {
    return <Text>Acesso Negado</Text>;
  }

    async function takePicture(){
     if (camRef){
       const data = await camRef.current.takePictureAsync(); //
      setFotoCapturada(data.uri);
       setOpen(true);
     }
  }


return (
  <View style={styles.container}>
    <Camera style={styles.camera} type={type} ref={camRef}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}>
          <Text style={styles.text}> Trocar </Text>
          <Text style={styles.text} onPress={selImagem}>Galeria</Text>
        
        </TouchableOpacity>
        </View>
         
      
      
    </Camera>
    <TouchableOpacity style={styles.camContainer} onPress={takePicture}>
        <FontAwesome  style={styles.camButton} name="camera" color='#0ca' size={25}/>

      </TouchableOpacity>
    

    {fotoCapturada && 
    <Modal animationType="slide" transparent={false} visible={open}>
         <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <TouchableOpacity style={{margin:20}} onPress ={() => setOpen(false)}>
            <FontAwesome name="window-close" size={25} color='black'/>
          </TouchableOpacity>
          <Image style={{width:300, height:300, borderRadius:8,margin:10}} source={{uri: fotoCapturada}}></Image>
           {imagem && 
         <Image source={{uri: imagem}} style={{width:200, height:200}}/>}
        </View>
      </Modal> }
  </View>

) }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
  },

  button :{
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 25,
    margin:50,
    
    
  },

  
  camContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    bottom:0,
    position:'absolute'
  },

  camera :{
    height: '100%',
    width:'100%',
  },
  
  text: {
    color: '#fff'
    

  }
});



   