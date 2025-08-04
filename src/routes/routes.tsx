// src/routes/routes.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import das suas telas
import { Welcome } from '../screens/Welcome/WelcomeScreen';
import { Login } from '../screens/Login/LoginScreen';
import { SelectProfile } from '../screens/SelectProfile/SelectProfileScreen';
import { RegisterPhotographer } from '../screens/RegisterPhotographer/RegisterPhotographerScreen';

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  SelectProfile: undefined;
  RegisterPhotographer: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SelectProfile" component={SelectProfile} />
        <Stack.Screen name="RegisterPhotographer" component={RegisterPhotographer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
