import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import styles from './styles';

const VideoScreen = () => {
  const handleOption1Click = () => {
    // Lógica para quando a opção 1 for clicada
    console.log('Opção 1 clicada');
  };

  const handleOption2Click = () => {
    // Lógica para quando a opção 2 for clicada
    console.log('Opção 2 clicada');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Aula</Text>
      </View>
      <View style={styles.videoContainer}>
        <Video
          source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
          style={styles.video}
          useNativeControls
          resizeMode="contain"
        />
      </View>
      <View style={styles.optionsContainer}>
        <TouchableOpacity onPress={handleOption1Click}>
          <Text style={styles.option}>Opção 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleOption2Click}>
          <Text style={styles.option}>Opção 2</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VideoScreen;
