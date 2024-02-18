import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'

const Auth = createNativeStackNavigator()

const AuthRoutes = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Auth.Screen name='Welcome' component={Welcome} />
  </Auth.Navigator>
);

export default AuthRoutes
