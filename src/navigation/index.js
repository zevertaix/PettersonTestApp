import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import FavoritesScreen from '../screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import StackNavigator from "./StackNavigator";


const Tab = createBottomTabNavigator();

export default () => (
  <NavigationContainer>
    <Tab.Navigator screenOptions={({ route }) => ({ 
      headerShown: false, 
      tabBarStyle: { 
        backgroundColor: "#15172d",
        borderTopWidth: 0,
        borderTopColor: "transparent",
        elevation: 1,
        shadowColor : '#0a0a0a',
        shadowOpacity: 0.5,
        shadowOffset: {
          height: 3,
        },
        shadowRadius: 20,
      },
      tabBarLabel:() => {return null},
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'StackNavigator') {
          iconName = focused
          ? 'home-sharp'
          : 'home-outline';
        } else if (route.name === 'Favorites') {
          iconName = focused ? 'heart-sharp' : 'heart-outline';
        }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      tabBarActiveTintColor: '#25bc49',
      tabBarInactiveTintColor: 'gray',
    })} >
      <Tab.Screen name="StackNavigator" component={StackNavigator} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);