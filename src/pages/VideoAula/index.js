import React from 'react';
import { Text, Image } from 'react-native';
import { Video } from 'expo-av';
import YoutubeIframe from 'react-native-youtube-iframe';

import {
  Container, 
  ImageContainer
} from './styles'

const VideoScreen = () => {

  return (
    <Container>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>O que são finanças?</Text>
      <Text style={{ fontSize: 22 }}>Introdução a Finanças - 1/4</Text>

      <ImageContainer>
        <Image
          source={require('../../../assets/Content/text-background.png')}
          style={{
            position: 'absolute',
          }} 
        />

        <Text style={{ fontSize: 20, color: '#C6F3E8' }}>Aula em texto</Text>
      </ImageContainer>

      <ImageContainer>
        <Image
          source={require('../../../assets/Content/audio-background.png')}
          style={{
            position: 'absolute'
          }}
        />

        <Text style={{ fontSize: 20, color: '#C6F3E8' }}>Aula em áudio</Text>
      </ImageContainer>

      <ImageContainer isSelected>
        <Image
          source={require('../../../assets/Content/video-background.png')}
          style={{
            position: 'absolute'
          }}
        />

        <Text style={{ fontSize: 20, color: '#C6F3E8' }}>Aula em vídeo</Text>
      </ImageContainer>

      {/* <Video
        source={{ uri: 'https://www.youtube.com/watch?v=GWGL5dBy3-8&ab_channel=PedroInvest' }}
        style={{
          width: '100%',
          height: '36%',
          borderBottomRightRadius: '26%',
          borderBottomLeftRadius: '26%'
        }}
        useNativeControls
        resizeMode="cover"
      /> */}

      <YoutubeIframe
        videoId='GWGL5dBy3-8'
        height='100%'
        width='100%'
        play
      />
    </Container>
  );
};

export default VideoScreen;
