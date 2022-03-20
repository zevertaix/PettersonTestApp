import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PhotosScreen from '../screens/PhotosScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createNativeStackNavigator();

export default () => {
  return(
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
    >
      <Stack.Screen name="Photos" component={PhotosScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  )
}