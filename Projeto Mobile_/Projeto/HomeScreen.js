import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const realizarLogin = () => {
    if (login.trim() === '' || senha.trim() === '') {
      alert('Por favor, preencha o login e senha.');
      return;
    }

    // Realizar a validação do login e senha aqui
    // ...

    // Navegar para a tela de imagem com os exercícios
    navigation.navigate('Image', {
      exercicios: [
        { titulo: 'Exercício 1', lista: [] },
        { titulo: 'Exercício 2', lista: [] },
        { titulo: 'Exercício 3', lista: [] },
        { titulo: 'Exercício 4', lista: [] },
      ],
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.bemVindo}>Bem-vindo!</Text>
        <Text style={styles.titulo}>Academia NHE</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Login"
          value={login}
          onChangeText={setLogin}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
        <TouchableOpacity style={styles.botao} onPress={realizarLogin}>
          <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>
      </View>
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
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bemVindo: {
    fontSize: 18,
    marginBottom: 20,
    color: 'green',
  },
  titulo: {
    fontSize: 24,
    color: 'green',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width: '80%',
  },
  botao: {
    backgroundColor: 'green',
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
