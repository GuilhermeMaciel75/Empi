import { useCallback, useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'

import {
  Container,
  Option,
  OptionText,
  OptionCheck,
  Button,
  ButtonText
} from './styles';

const Task = () => {
  const [optionSelected, setOptionSelected] = useState(-1)

  const handleOptionSelection = useCallback((index) => {
    setOptionSelected(index)
  }, [])

  return (
    <Container>
      {
        Array.from({ length: 4 }).map((_, index) => {
          return(
            <Option 
              onPress={() => handleOptionSelection(index)}
              key={index}
              style={
                index !=0 && { marginTop: 16 }
              }
            >
              <OptionText>Aula {index + 1}</OptionText>

              <OptionCheck
                optionSelected={optionSelected == index} 
              >
                {optionSelected == index && <MaterialIcons name='check' size={15} color='#fff' />}
              </OptionCheck>
            </Option>
          )
        })
      }

      <Button>
        <ButtonText>Atividade X</ButtonText>
      </Button>
    </Container>
  )
}

export default Task