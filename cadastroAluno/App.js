import React, { useEffect, useState,} from "react";
import { View, Text, StatusBar, TextInput, TouchableOpacity, FlatList, StyleSheet, Keyboard, Alert,  Dimensions } from "react-native";

import Feather from 'react-native-vector-icons/Feather';

import * as SQLite from 'expo-sqlite';


const db = SQLite.openDatabase("aluno.db");
 
const App = () => {

  const [nome, setNome] = useState("");

  const [idade, setIdade] = useState("");

  const [email, setEmail] = useState("");

  const [alunos, setAlunos] = useState([]);
  
  const [mostraMsg, setaMsg] = useState(true);



 
  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS alunos (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR (45), idade VARCHAR (45), email VARCHAR (45) )`,
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
 
  const cadastrarAluno = () => {
    if (!nome || !idade || !email) {
      alert("Preencha os campos corretamente!");
      return false;
    }
 
    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO alunos (nome, idade,email) VALUES (?,?,?)`,
        [nome,idade,email],
        (sqlTxn, res) => {
          console.log(`${nome} Aluno adicionado com sucesso!`);

          getAlunos();
          setNome("");
          setIdade("");
          setEmail("");
          Keyboard.dismiss();
        },
        error => {
          console.log("Erro ao inserir um Aluno " + error.message);
        },
      );
    });
  };
 
  const getAlunos = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM alunos ORDER BY id DESC`,
        [],
        (sqlTxn, res) => {
          console.log("Alunos lidos com sucesso!");
          let len = res.rows.length;
 
          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, nome: item.nome, idade: item.idade, email: item.email});
            }
 
            setAlunos(results);
          }
        },
        error => {
          console.log("Erro ao obter Alunos " + error.message);
        },
      );
    });
  };

  const deletarAluno = (id,nome)=>{

    return Alert.alert(
      "Você tem certeza 😨?",
      `Deseja deletar o Aluno ${nome}?`,

      [

      // o botao sim 

      {
        text: 'Sim',
        onPress: ()=>{
          setaMsg(false);
          db.transaction(txn => {
            txn.executeSql(
              `delete from alunos where id = ?;`, [id],
              (sqlTxn, res) => {
                console.log(`${nome} Aluno deletado com sucesso!`);
                setAlunos("");
                getAlunos();
              },
              error => {
                console.log("Erro ao deletar Aluno " + error.message);
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
 
  const renderAluno = ({ item }) => {
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
         <Text>Nome: {item.nome}</Text>
         <Text>Idade: {item.idade}</Text>
         <Text>Email: {item.email}</Text>
        </View>
        
        <View style={styles.viewDeletar} >
         <Feather onPress={()=>{deletarAluno(item.id,item.nome)}} name='trash' size={20} color='#131313' />
        </View>
      
      </View>
    );
  };
 


  useEffect(async () => {
    await createTables();
    await getAlunos();
  }, []);



  return (
    <View>

      <StatusBar backgroundColor="#3498db" />
 
      <Text style={styles.textoPrincipal} >Cadastro de Alunos</Text>

      <View style={styles.cadastrar} >

      <View style={styles.viewEntrada} >
        <TextInput style={styles.entradaTexto}
          placeholder="Nome"
          value={nome}
          onChangeText={setNome} 
        />
      </View>

      <View style={styles.viewEntrada} >
        <TextInput style={styles.entradaTexto}
          placeholder="Idade"
          value={idade}
          onChangeText={setIdade} keyboardType='numeric'
        />
      </View>

      <View style={styles.viewEntrada} >
        <TextInput style={styles.entradaTexto}
          placeholder="Email"
          value={email}
          onChangeText={setEmail} keyboardType='email'
        />
      </View>



      <View style={styles.viewBtn} >
        
      <TouchableOpacity onPress={cadastrarAluno} style={styles.btnSalvar}  hitSlop={{ top: 40, bottom: 40, left: 40, right: 40 }} >
        <Text>Cadastrar Aluno </Text>
        <Feather name='plus' size={20} color='#3498db' />
      </TouchableOpacity>
      
      </View>

      </View>
    
      
      <FlatList
        data={alunos}
        renderItem={renderAluno} 
        key={t => t.id} 
      
      />
    </View>
  );
};

var {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({

  

  cadastrar:{
    display: 'flex',
    flexDirection: 'column',
    marginTop: 10,
    alignItems: 'center',
  },
  textoPrincipal:{
    fontSize: 25,
    padding: 5,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#222',
    backgroundColor: '#3498db',
  },
  viewEntrada:{
    padding: 5
  },
  viewBtn:{
    flex: 1,
    padding: 5
  },
  btnSalvar:{
    borderWidth: 2,
    borderColor: '#3498db',
    borderRadius: 3,
    width: 31.5,
    height: 31.5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.9,
    padding: 25

  },
  entradaTexto:{
    borderWidth: 2,
    borderColor: '#3498db',
    padding: 10,
    borderRadius: 3, 
    width: width * 0.9
  },
  viewId:{
    flex: 11,
    marginTop: 100,
  },
  viewDeletar:{
    flex: 1,
  },
})

export default App;