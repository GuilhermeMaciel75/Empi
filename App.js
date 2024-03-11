import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppProvider from './src/hooks';

import Routes from './src/routes'

export default function App() {
  return (
    <NavigationContainer>
      <AppProvider>
        <View style={styles.container}>
          <Routes />
        </View>
      </AppProvider>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});