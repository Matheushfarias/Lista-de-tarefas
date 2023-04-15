import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {

  let [lista, setLista] = useState([
    { nome: "arrumar a cama ", key: 1 },
    { nome: "lavar a louça", key: 2 },
    { nome: "lavar a roupa", key: 3 },
    { nome: "academia", key: 4 },
    { nome: "zavala", key: 5 },
    { nome: "ikora", key: 6 },
    { nome: "oryx", key: 7 },
    { nome: "Cayde-6", key: 8 }
  ]);
  
  let [novaLista, setNovaLista] = useState('');

  const adicionarLista = () => {
    if(novaLista !== ''){
      let novaListaObj = { nome: novaLista, key: lista.length + 1 };
      setLista([...lista, novaListaObj]);
      setNovaLista('');
    }
  };

  const excluirItem = (key) => {
    const novaLista = lista.filter((item) => item.key !== key);
    setLista(novaLista);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.texto}>Gerenciador de Listas</Text>
        <View style={styles.inputContainer}>
          
          <TextInput
            style={styles.input}
            onChangeText={setNovaLista}
            value={novaLista}
            placeholder="Nome da nova lista"
          />
          <TouchableOpacity style={styles.botao} onPress={adicionarLista}>
            <Text style={styles.botaoTexto}>Adicionar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          numColumns={1}
          keyExtractor={(item) => item.key}
          data={lista}
          renderItem={({ item }) => (
            <View style={styles.listaContainer}>
              <Text style={styles.texto}>{item.nome}</Text>
              <TouchableOpacity style={styles.container2}>
                <FontAwesome5 name="pen" size={24} color="#4CAF50" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.container2}
                onPress={() => excluirItem(item.key)}
              >
                <FontAwesome5 name="trash" size={24} color="red" />
              </TouchableOpacity>
            </View>
          )}
        />


      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 40,
  },
  listaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container2: {
    marginLeft: 25,
    justifyContent: 'flex-end',
    paddingHorizontal: 15,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
  },
  input: {
    width: '50%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 18,
    alignItems: 'center',
  },
  botao: {
    width: '30%',
    height: 40,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoTexto: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 40,
  },
  listaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5
  }
})