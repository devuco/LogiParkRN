import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Home, Login, SplashScreen} from './src/screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export default App = () => {
  const LoginStack = createNativeStackNavigator();
  const BottomTabNavigator = createBottomTabNavigator();

  const BottomTabs = () => {
    return (
      <BottomTabNavigator.Navigator>
        <BottomTabNavigator.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {backgroundColor: 'goldenrod'},
          }}
        />
      </BottomTabNavigator.Navigator>
    );
  };
  const LoginScreens = () => {
    return (
      <LoginStack.Navigator screenOptions={{headerShown: false}}>
        <LoginStack.Screen name="SplashScreen" component={SplashScreen} />
        <LoginStack.Screen name="Login" component={Login} />
        <LoginStack.Screen name="Tabs" component={BottomTabs} />
      </LoginStack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <LoginScreens />
    </NavigationContainer>
  );
};
