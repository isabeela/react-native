import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, TextInput, TouchableOpacity, FlatList, StyleSheet, Keyboard, Alert } from "react-native";

import Feather from 'react-native-vector-icons/Feather';
// Para Expo
import * as SQLite from 'expo-sqlite';


// Para Expo
const db = SQLite.openDatabase("produtos.db");
 
const App = () => {

  //quantidade
  const [produto, setProduto] = useState("");

  //nome
  const [produto2, setProduto2] = useState("");

  const [produtos, setProdutos] = useState([]);
  
  const [mostraMsg, setaMsg] = useState(true);

  


 
  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS produtos (id INTEGER PRIMARY KEY AUTOINCREMENT, quantidade VARCHAR (45), nome VARCHAR (45) )`,
        [],
        (sqlTxn, res) => {
          console.log("Tabela criada com sucesso!");
        },
        error => {
          console.log("error on creating table " + error.message);
        },
      );
    });
  };
 
  const incluirProduto = () => {
    if (!produto || !produto2) {
      alert("Preencha os campos corretamente!");
      return false;
    }
 
    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO produtos (quantidade,nome) VALUES (?,?)`,
        [produto,produto2],
        (sqlTxn, res) => {
          console.log(`${produto} ${produto2} Produto adicionado com sucesso!`);

          getProdutos();
          setProduto("");
          setProduto2("");
          Keyboard.dismiss();
        },
        error => {
          console.log("Erro ao inserir um Produto " + error.message);
        },
      );
    });
  };
 
  const getProdutos = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM produtos ORDER BY id DESC`,
        [],
        (sqlTxn, res) => {
          console.log("Produtos lidos com sucesso!");
          let len = res.rows.length;
 
          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, quantidade: item.quantidade, nome: item.nome });
            }
 
            setProdutos(results);
          }
        },
        error => {
          console.log("Erro ao obter Produtos " + error.message);
        },
      );
    });
  };

  const deletaProduto = (id,nome)=>{

    return Alert.alert(
      "Você tem certeza 😨?",
      `Deseja deletar o item ${nome}?`,

      [

      // o botao sim 

      {
        text: 'Sim',
        onPress: ()=>{
          setaMsg(false);
          db.transaction(txn => {
            txn.executeSql(
              `delete from produtos where id = ?;`, [id],
              (sqlTxn, res) => {
                console.log(`${produto} Produto deletado com sucesso!`);
                setProdutos("");
                getProdutos();
              },
              error => {
                console.log("Erro ao deletar um Produto " + error.message);
              },
            );
          });
        },
      },

      // o botao nao

      {
        text: 'Não',
      },

      ]

    )

  }
 
  const renderProduto = ({ item }) => {
    return (
      
      <View style={{
        flexDirection: "row",
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderColor: "#ddd",
        alignItems: 'center',
      }}>

        <View style={styles.viewId} >
         <Text>{item.nome} ({item.quantidade})</Text>
        </View>
        
        <View style={styles.viewDeletar} >
         <Feather onPress={()=>{deletaProduto(item.id,item.nome)}} name='trash' size={20} color='#131313' />
        </View>
      
      </View>
    );
  };
 


  useEffect(async () => {
    await createTables();
    await getProdutos();
  }, []);



  return (
    <View>

      <StatusBar backgroundColor="#f1c40f" />
 
      <Text style={styles.textoPrincipal} >Lista de Compras</Text>

      <View style={styles.cadastrar} >

      <View style={styles.viewEntrada} >
        <TextInput style={styles.entradaTexto}
          placeholder="Quantidade"
          value={produto}
          onChangeText={setProduto} keyboardType='numeric'
        />
      </View>

      <View style={styles.viewEntrada} >
        <TextInput style={styles.entradaTexto}
          placeholder="Nome do produto"
          value={produto2}
          onChangeText={setProduto2}
        />
      </View>



      <View style={styles.viewBtn} >
        
      <TouchableOpacity onPress={incluirProduto} style={styles.btnSalvar} >
        <Feather name='plus' size={20} color='#131313' />
      </TouchableOpacity>
      </View>

      </View>
    
       
      
 
      <FlatList
        data={produtos}
        renderItem={renderProduto} 
        key={t => t.id} 
      
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cadastrar:{
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  textoPrincipal:{
    fontSize: 25,
    padding: 5,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#222',
    backgroundColor: '#011a1c',
    color: "#fff"
  },
  viewEntrada:{
    flex: 5,
    padding: 5
  },
  viewBtn:{
    flex: 1,
    padding: 5
  },
  btnSalvar:{
    borderWidth: 2,
    borderColor: '#131313',
    borderRadius: 3,
    width: 31.5,
    height: 31.5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  entradaTexto:{
    borderWidth: 2,
    borderColor: '#131313',
    paddingLeft: 4,
    borderRadius: 3, 
  },
  viewId:{
    flex: 11,
  },
  viewDeletar:{
    flex: 1,
  },
})

export default App;