import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';//pilha de navegacao, uma tela se soprepoe a outra
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';

import React from 'react';
import Login from '../pages/login';
import Register from '../pages/registration';
import Home from '../pages/home';
import Categoria from '../pages/categoria';
import Produto from '../pages/produto';

const TabNavigation = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <TabNavigation.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: { backgroundColor: '#0c1da2', borderBottomWidth: 0, }
    }}>
      <TabNavigation.Screen name='HomeTabScreen' options={{
        title: 'home',
        tabBarIcon: () => (<Icon name='home' color='#000' type='font-awesome' size={24} />)
      }}
        component={Home} />
      <TabNavigation.Screen name='CategoriaTabScreen' component={Categoria}
        options={{
          title: 'Categorias',
          tabBarIcon: () => (<Icon name='list' color='#000' type='font-awesome' size={24} />)
        }}
      />
    </TabNavigation.Navigator>
  );
}

const DrawerNavigation = createDrawerNavigator();
const NavigationDrawer = () => {

  return (
    <DrawerNavigation.Navigator>
      <DrawerNavigation.Screen
        name="TabNavigationScreen"
        options={{ title: 'Home Principal' }}
        component={BottomTabNavigator}
      />
      <DrawerNavigation.Screen
        name="CategoriaDrawerScreen"
        component={Categoria}
      />
      
    </DrawerNavigation.Navigator>
  );
}
const StackNavigation = createNativeStackNavigator();

const Root = () => {

  return (
    <NavigationContainer /*engloba todas as navegacoes*/>
      <StackNavigation.Navigator /*container dos itens q vao ser definidos pra navegar*/>
        <StackNavigation.Screen
          options={{ headerShown: false }}
          name='Login'
          component={Login}
        />
        <StackNavigation.Screen
          options={{ headerShown: false }}
          name='Home'
          component={NavigationDrawer}
        />
         <StackNavigation.Screen
          options={{ headerShown: false }}
          name='Register'
          component={Register}
        />
         <StackNavigation.Screen
          options={{ headerShown: false }}
          name="Produto"
          component={Produto}
        />
      </StackNavigation.Navigator>
    </NavigationContainer>
  );
}

export default Root;