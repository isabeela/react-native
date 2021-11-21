import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  View,
  FlatList,
  Button,
  Alert,
} from "react-native";
//import AsyncStorage from '@react-native-async-storage/async-storage';//
import * as SQLite from "expo-sqlite";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
export default function App() {
  const db = SQLite.openDatabase("tarefas.db");

  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const createTables = () => {
    db.transaction((txn) => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS tarefas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(20))`,
        [],
        (sqlTxn, res) => {
          console.log("Tabela criada com sucesso!");
        },
        (error) => {
          console.log("error on creating table " + error.message);
        }
      );
    });
  };

  const incluirTarefa = () => {
    if (!tarefa) {
      alert("Informe uma tarefa");
      return false;
    }

    db.transaction((txn) => {
      txn.executeSql(
        `INSERT INTO tarefas (nome) VALUES (?)`,
        [tarefa],
        (sqlTxn, res) => {
          console.log(`${tarefa} Tarefa adicionada com sucesso!`);
          getTarefas();
          setTarefa("");
        },
        (error) => {
          console.log("Erro ao inserir uma Tarefa " + error.message);
        }
      );
    });
  };

  const deleteTarefa = (id) => {
    db.transaction((tx) => {
      tx.executeSql(
        `DELETE FROM tarefas WHERE id = ?`,
        [id],

        (sqlTxn, res) => {
          console.log(`${tarefa} Tarefa deletada com sucesso!`);
          setTarefas("");
          getTarefas();
        },
        (error) => {
          console.log("Erro ao deletar uma Tarefa " + error.message);
        }
      );
    });
  };

  const getTarefas = () => {
    db.transaction((txn) => {
      txn.executeSql(
        `SELECT * FROM tarefas ORDER BY id DESC`,
        [],
        (sqlTxn, res) => {
          console.log("Tarefas lidas com sucesso!");
          let len = res.rows.length;

          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, nome: item.nome });
            }

            setTarefas(results);
          }
        },
        (error) => {
          console.log("Erro ao obter Tarefas " + error.message);
        }
      );
    });
  };

  const renderTarefa = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 12,
          paddingHorizontal: 10,
          borderBottomWidth: 1,
          borderColor: "#f2d69c",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 25 }}>{item.id}</Text>
        <Text style={{ fontSize: 25 }}>{item.nome}</Text>
        <View>
          <TouchableOpacity
            onPress={() => {
              deleteTarefa(item.id);
            }}
          >
            <MaterialIcons name="delete" size={30} color="#2c4a84" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  useEffect(async () => {
    await createTables();
    await getTarefas();
  }, []);

  return (
    <View style={{ justifyContent: "flex-start" }}>
      <TextInput
        placeholder="Informe uma tarefa"
        value={tarefa}
        onChangeText={setTarefa}
        style={{
          color: "#34659b",
          padding: 25,
          fontSize: 25,
        }}
      />

      <TouchableOpacity
        style={{
          color: "#f2d69c",
          padding: 20,
          margin: 20,
          width: 140,
          alignSelf: "center",
          alignItems: "center",
          borderRadius: 15,
          backgroundColor: "#34659b",
          fontWeight: "bold",
          fontFamily: "Arial",
        }}
        onPress={incluirTarefa}
      >
        Adicionar
      </TouchableOpacity>

      <View>
        <FlatList data={tarefas} renderItem={renderTarefa} key={(t) => t.id} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemButton: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  checkQuadrado: {
    width: 24,
    height: 24,
    backgroundColor: "#34659b",
    opacity: 0.5,
    borderRadius: 5,
    marginRight: 15,
  },
  input: {
    maxWidth: "80%",
    color: "#34659b",
  },
});