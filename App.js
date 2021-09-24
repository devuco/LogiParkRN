import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Details, Home, Login, Profile, SplashScreen} from './src/screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from './src/colors/colors';

export default App = () => {
  const LoginStack = createNativeStackNavigator();
  const BottomTabNavigator = createBottomTabNavigator();
  const HomeNavigator = createNativeStackNavigator();
  const ProfileNavigator = createNativeStackNavigator();

  const ProfileStack = () => {
    return (
      <ProfileNavigator.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: COLORS.PRIMARY},
        }}>
        <ProfileNavigator.Screen name="Profile" component={Profile} />
      </ProfileNavigator.Navigator>
    );
  };

  const HomeStack = () => {
    return (
      <HomeNavigator.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: COLORS.PRIMARY},
        }}>
        <HomeNavigator.Screen name="Home" component={Home} />
      </HomeNavigator.Navigator>
    );
  };

  const BottomTabs = () => {
    return (
      <BottomTabNavigator.Navigator screenOptions={{headerShown: false}}>
        <BottomTabNavigator.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            headerShown: false,
          }}
        />
        <BottomTabNavigator.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            headerShown: false,
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
        <HomeNavigator.Screen
          name="Details"
          component={Details}
          options={{
            headerShown: true,
            headerStyle: {backgroundColor: COLORS.PRIMARY},
          }}
        />
      </LoginStack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <LoginScreens />
    </NavigationContainer>
  );
};
