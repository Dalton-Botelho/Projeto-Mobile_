import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function ImageScreen({ route, navigation }) {
  const { exercicios } = route.params;
  const [exercicioSelecionado, setExercicioSelecionado] = useState(null);
  const [textoExercicio, setTextoExercicio] = useState('');
  const [listaExercicios, setListaExercicios] = useState([]);

  const adicionarExercicio = () => {
    if (textoExercicio.trim() === '') return;

    const exercicio = { texto: textoExercicio };
    const novoExercicios = [...listaExercicios, exercicio];
    setListaExercicios(novoExercicios);
    setTextoExercicio('');
  };

  const selecionarExercicio = (exercicio) => {
    setExercicioSelecionado(exercicio);
    setListaExercicios(exercicio.lista);
  };

  const realizarLogout = () => {
    // Realizar as ações de logout aqui
    // ...

    // Navegar de volta para a tela inicial (HomeScreen)
    navigation.popToTop();
  };

  const excluirExercicio = (index) => {
    const novoExercicios = [...listaExercicios];
    novoExercicios.splice(index, 1);
    setListaExercicios(novoExercicios);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {exercicios.map((exercicio) => (
          <TouchableOpacity
            key={exercicio.titulo}
            style={styles.exercicio}
            onPress={() => selecionarExercicio(exercicio)}
          >
            <Text style={styles.exercicioTexto}>{exercicio.titulo}</Text>
          </TouchableOpacity>
        ))}

        {exercicioSelecionado && (
          <View style={styles.listaContainer}>
            {listaExercicios.map((exercicio, index) => (
              <View key={index} style={styles.exercicioItem}>
                <Text style={styles.exercicioLista}>{exercicio.texto}</Text>
                <TouchableOpacity
                  style={styles.exercicioExcluir}
                  onPress={() => excluirExercicio(index)}
                >
                  <Text style={styles.exercicioExcluirTexto}>Excluir</Text>
                </TouchableOpacity>
              </View>
            ))}
            <TextInput
              style={styles.input}
              placeholder="Digite um exercício"
              value={textoExercicio}
              onChangeText={setTextoExercicio}
              onSubmitEditing={adicionarExercicio}
            />
          </View>
        )}

        <TouchableOpacity style={styles.botaoLogout} onPress={realizarLogout}>
          <Text style={styles.textoBotao}>Sair</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  exercicio: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  exercicioTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
  listaContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  exercicioItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'lightgreen',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  exercicioLista: {
    flex: 1,
    color: '#000',
    fontWeight: 'bold',
  },
  exercicioExcluir: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
  exercicioExcluirTexto: {
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width: '80%',
  },
  botaoLogout: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '80%',
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
