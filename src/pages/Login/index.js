import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

import * as Animatable from 'react-native-animatable'

export default function Signin() {
  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Capacita</Text>
      </Animatable.View>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require('../../../assets/Chat/logoLogin.png')}
          style={{ width: '100%' }}
          resizeMode="contain"
        />
      </View>
      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Usuário</Text>
        <TextInput
          placeholder="Digite seu usuário"
          style={styles.input}
        />
        <Text style={styles.title}>Senha</Text>
        <TextInput
          placeholder="Sua senha"
          style={styles.input}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegisterSocial}>
          <Text style={styles.registerText}>Entrar com Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRegisterSocial}>
          <Text style={styles.registerText}>Entrar com facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister}>
          <Text style={styles.registerText}>Esqueceu a senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRegister}>
          <Text style={styles.registerText}>Increva-se</Text>
        </TouchableOpacity>

      </Animatable.View>
    </View>
  );
}