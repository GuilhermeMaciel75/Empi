import { useCallback, useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'

import {
  Container,
  DotContainer,
  Dot,
  Button,
  GreyContainer,
  WhiteContainer,
  Title,
  Subtitle,
} from './styles';

const phrases = [
  {
    title: 'Bem vindo(a) ao Capacita!',
    subtitle: 'O lugar onde entender sobre as finanças do seu empreendimento se torna simples e respeita o seu tempo.'
  },
  {
    title: 'Aprenda e receba apoio',
    subtitle: 'Acesse quando e onde quiser as aulas e atividades que irão te ajudar a entender conceitos do mundo das finanças. Se precisar de ajuda, tenha o auxílio da Maria, a nossa Inteligência Artificial especialista em finanças para micro e pequenas empresas.'
  },
  {
    title: 'Vamos começar?',
    subtitle: 'Antes de tudo, precisamos entender como o aplicativo funciona.'
  }
]

const Welcome = () => {
  const [dotSelected, setDotSelected] = useState(0)

  const handleDotSelection = useCallback(() => {
    if (dotSelected < 2) {
      setDotSelected(dotSelected + 1)
    } else {
      // acaba tutorial
    }
  }, [dotSelected])

  return (
    <Container>
      <GreyContainer/>

      <WhiteContainer>
        <DotContainer>
          {Array.from({ length: 3 }).map((_, index) => <Dot dotSelected={dotSelected == index} key={index} />)}
        </DotContainer>
    
        <Title>{phrases[dotSelected].title}</Title>
    
        <Subtitle>{phrases[dotSelected].subtitle}</Subtitle>
        
        <Button
          onPress={handleDotSelection}
        >
          <MaterialIcons name='arrow-forward' size={32} color='black' />
        </Button>
      </WhiteContainer>
    </Container>
  )
}

export default Welcome