import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Home, Login, SplashScreen} from './src/screens';

export default App = () => {
  const LoginStack = createNativeStackNavigator();
  const LoginScreens = () => {
    return (
      <LoginStack.Navigator>
        <LoginStack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <LoginStack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <LoginStack.Screen name="Home" component={Home} />
      </LoginStack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <LoginScreens />
    </NavigationContainer>
  );
};
