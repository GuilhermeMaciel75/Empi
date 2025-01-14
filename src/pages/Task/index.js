import { useCallback, useState } from 'react'
import { Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Option,
  OptionText,
  OptionCheck,
  Button,
  ButtonText
} from './styles';

const Task = () => {
  const navigation = useNavigation()

  const [optionSelected, setOptionSelected] = useState(-1)

  const handleOptionSelection = useCallback((index) => {
    setOptionSelected(index)
    navigation.navigate('Lesson')
  }, [])

  const optionsNames = ['Introdução à Precificação', 'Métodos de Precificação', 'Estratégias de Precificação', 'Gestão de Preço']

  return (
    <Container>
      <Text style={{ fontSize: 24, marginBottom: 64 }} >Precificação</Text>

      {
        Array.from({ length: 4 }).map((_, index) => {
          return (
            <Option
              onPress={() => handleOptionSelection(index)}
              disabled={index !== 0}
              key={index}
              style={
                index !== 0 && { marginTop: 16 }
              }
              isBlocked={index !== 0}
            >
              <OptionText>{optionsNames[index]}</OptionText>

              <OptionCheck
                optionSelected={optionSelected === index}
              >
                {optionSelected === index && <MaterialIcons name='check' size={15} color='#fff' />}
              </OptionCheck>
            </Option>
          )
        })
      }

      <Button>
        <ButtonText>Avaliação de progresso</ButtonText>
      </Button>
    </Container>
  )
}

export default Task