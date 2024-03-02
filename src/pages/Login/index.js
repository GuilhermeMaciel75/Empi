import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import styles from './styles';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Senha:', password);
    navigation.navigate('Main');
  };

  const handleCreateAccount = () => {
    console.log('Criar nova conta clicado');
  };

  const handleForgotPassword = () => {
    console.log('Esqueceu a senha clicado');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Capacita</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button
        title="Login"
        onPress={handleLogin}
        style={styles.button}
      />
      <TouchableOpacity onPress={handleCreateAccount}>
        <Text style={styles.linkText}>Criar nova conta</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.linkText}>Esqueceu a senha?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;