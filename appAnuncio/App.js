import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
 
class App extends Component{
  render(){

    const imgPatins = "https://decathlonpro.vteximg.com.br/arquivos/ids/2407988-1000-1000/rs-quad-100-blue-navy-uk-5---eu-381.jpg?v=637033199988100000";

    const imgBox = "https://livrariaflorence.fbitsstatic.net/img/p/livro-box-harry-potter-tradicional-rowling-rocco-216802/403153.jpg?w=660&h=660&v=no-change";

    const imgCadeira = "https://cdn.iset.io/assets/00665/produtos/3568/cadeira_gamer_dt3_sports_mizano_fabric_grey_tecido_-_11362-3_-_01.png";

    const imgMochila = "https://www.novobebe.com.br/arquivos/ids/190978-1000-1000/mochila-KYARA-CINZA-CLARO-LB1A.jpg?v=637486485698770000";

    const imgCelular = "https://cf.shopee.com.br/file/fca38f3055413feee04702c8e5e06067_tn";

    const imgTenis = "https://a-static.mlcdn.com.br/1500x1500/tenis-academia-feminino-run/bfshoes/a001f-preto-34/3deb58ac785b2a1cb9b6df89bfa9eed9.jpg";

    const imgMoletom = "https://static.netshoes.com.br/produtos/moletom-canguru-planeta-com-capuz-em-algodao-unissex/30/RPM-0010-030/RPM-0010-030_zoom1.jpg?ts=1598035600&ims=544x";


    return(
      <View style={styles.container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

          <View style={styles.box}>
            <Text style={styles.promo}> Patins Quad Oxelo</Text>
            <Image
              source={{ uri: imgPatins }}
              style={styles.tamanho}/>

              <Text style={styles.descricao}> Lorem ipsum dolor sit amet </Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.promo}> Box Harry Potter </Text>
            <Image
              source={{ uri: imgBox }}
              style={styles.tamanho}/>

              <Text style={styles.descricao}> Lorem ipsum dolor sit amet </Text>
          </View>

          <View style={styles.box}>
              <Text style={styles.promo}> Cadeira Gamer </Text>
              <Image
              source={{ uri: imgCadeira }}
              style={styles.tamanho}/>

              <Text style={styles.descricao}> Lorem ipsum dolor sit amet </Text>
          </View>


          <View style={styles.box}>
            <Text style={styles.promo}> Mochila Kyara </Text>
            <Image
              source={{ uri: imgMochila }}
              style={styles.tamanho}/>

              <Text style={styles.descricao}> Lorem ipsum dolor sit amet </Text>

          </View>



          <View style={styles.box}>
             <Text style={styles.promo}> Smartphone Xiaomi M11 </Text>
             <Image
              source={{ uri: imgCelular }}
              style={styles.tamanho}/>

              <Text style={styles.descricao}> Lorem ipsum dolor sit amet </Text>

          </View>


          <View style={styles.box}>
             <Text style={styles.promo}> Tênis Feminino  </Text>
             <Image
              source={{ uri: imgTenis }}
              style={styles.tamanho}/>
              <Text style={styles.descricao}> Lorem ipsum dolor sit amet </Text>
          </View>


          <View style={styles.box}>
            <Text style={styles.promo}> Moletom Saturno </Text>
            <Image
              source={{ uri: imgMoletom }}
              style={styles.tamanho}/>
              <Text style={styles.descricao}> Lorem ipsum dolor sit amet </Text>

          </View>
         
        </ScrollView>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container:{
    flex: 1,
    margin: 20
  },
  box:{
    borderColor: '#e3e3e3',
    borderWidth: 1,
    height: 300,
    width: 250,
    marginLeft: 8,
    backgroundColor: 'transparent'
  },
  promo: {
    backgroundColor: '#66038a',
    height: 50,
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    padding: 10
  },
  tamanho: {
    margin: 18,
    marginLeft: 40,
    width: 170,
    height: 170,
  },

  descricao: {
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 18
  }
});

export default App;