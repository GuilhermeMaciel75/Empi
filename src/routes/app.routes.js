import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'

import Task from '../pages/Task'
import Chat from '../pages/Chat'

const Tab = createBottomTabNavigator()

function MyTabs() {
  
  return (
    <Tab.Navigator
      screenOptions={{
        header: () => null,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#09190E',
        },
      }}
    >
      <Tab.Screen 
        name='Chat' 
        component={Chat} 
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }} >
              <MaterialIcons name='chat-bubble' size={24} color={focused ? '#10E873' : '#FAF9F6'}  />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name='Task2' 
        component={Task} 
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }} >
              <MaterialIcons name='menu-book' size={24} color={focused ? '#10E873' : '#FAF9F6'}  />
            </View>
          ),
        }}
      />

      <Tab.Screen 
        name='Task3' 
        component={Task} 
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }} >
              <MaterialIcons name='account-circle' size={24} color={focused ? '#10E873' : '#FAF9F6'}  />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default MyTabs