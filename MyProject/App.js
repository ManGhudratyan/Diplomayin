import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Components/views/LoginScreen';
import RegistrationScreen from './Components/views/RegistrationScreen';
import HomeScreen from './Components/views/HomeScreen';
import UserPage from './Components/views/UserPage';
import TabNavigation from './Components/views/TabNavigation';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="UserPage" component={UserPage} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
