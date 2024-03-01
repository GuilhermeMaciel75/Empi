import { useEffect, useRef, useState } from 'react'
import { Text, KeyboardAvoidingView, Platform, ScrollView, Image, Keyboard  } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

import { 
  Container,
  TextContainer,
  InputContainer,
  Input,
  InputButton,
  MessageContainer,
} from './styles'

const Chat = () => {
  const [isIntroduction, setIsIntroduction] = useState(true)
  const [inputText, setInputText] = useState('')
  const [messages, setMessages] = useState([])
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false)

  const scrollViewRef = useRef()

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setIsKeyboardVisible(true)
    })
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setIsKeyboardVisible(false)
    })
  
    return () => {
      showSubscription.remove()
      hideSubscription.remove()
    }
  }, [])

  const handleSendText = () => {
    if (isIntroduction) setIsIntroduction(false)

    setMessages([...messages, inputText, 'Compreendo Totalmente']) // simulando a pessoa falar e o bot responder   
    setInputText('')

    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true })
    }, 100) // pra dar um efeito
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={
        Platform.OS === 'ios' ? 'padding' : undefined /* do nothing */
      }
    >
      <Container
        isIntroduction={isIntroduction}
      >
        <TextContainer
          style={{
            flex: 1,
            alignItems: 'center'
          }}
        >
          {isIntroduction
            ? <>
                <Text style={{ fontSize: 24 }} >
                  Olá, sou a Maria!
                </Text>

                <Text style={{ fontSize: 20 }} >
                  Em que posso lhe ajudar?
                </Text>

                {!isKeyboardVisible &&
                  <Image
                    source={require('../../../assets/Chat/bot.png')} 
                    style={{
                      marginTop: 'auto'
                    }}
                  />
                }
              </>
            : <ScrollView
                ref={scrollViewRef}
                style={{ 
                  flex: 1, 
                  minWidth: '100%',
                }}
              >
                {messages.map((message, index) => {
                  const isUser = index % 2 == 0

                  return (
                    <MessageContainer 
                      isUser={isUser}
                      key={index}
                    >
                      <Text
                        style={{
                          color: isUser ? '#fff' : '#000'
                        }}
                      >
                        {message}
                      </Text>
                    </MessageContainer>
                  )
                })}
              </ScrollView>
          }
        </TextContainer>

        <InputContainer>
          <Input
            keyboardAppearance='dark'
            onChangeText={setInputText}
            value={inputText}
          />

          <InputButton
            onPress={handleSendText}
          >  
            <MaterialIcons name='arrow-right' size={44} color='#fff' style={{ height: 44, width: 44 }} />
          </InputButton>
        </InputContainer>
      </Container>
    </KeyboardAvoidingView>
  )
}

export default Chat