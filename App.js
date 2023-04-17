import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {

  let [lista, setLista] = useState([]);

  let [novaLista, setNovaLista] = useState('');

  const adicionarLista = () => {
    if (novaLista !== '') {
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
            multiline
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
            <View style={styles.viewflatlist}>
              <View style={styles.itemContainer}>
                <Text style={styles.itemTexto}>{item.nome}</Text>
              </View>
              <TouchableOpacity style={styles.container2}>
                <FontAwesome5 name="pen" size={24} color="#38cb2e" />
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
  viewflatlist: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flex: 1,
    textAlign: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5, 
    borderRadius: 5, 
    borderWidth: 1, 
    borderColor: '#ccc', 
  },
  container2: {
    marginLeft: 25,
    paddingHorizontal: 15,
    paddingVertical: 5,
    flexDirection: 'row',
  },
  inputContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
  },
  input: {
    width: '40%',
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 0
  },
  botao: {
    backgroundColor: '#38cb2e',
    padding: 10,
    borderRadius: 15,
    marginTop: 5,
  }
})
