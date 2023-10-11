import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Tarefas from './src/tela1';
import horas from './src/tela2';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Tarefas"
          component={Tarefas}
          options={{
            tabBarLabel: 'Tela 1',
            tabBarIcon: () => (
              <Image source={require('./assets/carrinho-de-compras.png')} style={{ width: 24, height: 24 }} />
            ),
          }}
        />
        <Tab.Screen
          name="tela2"
          component={horas}
          options={{
            tabBarLabel: 'Tela 2',
            tabBarIcon: () => (
              <Image source={require('./assets/relogio-calendario.png')} style={{ width: 24, height: 24 }} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
