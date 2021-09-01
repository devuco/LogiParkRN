import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {COLORS} from '../colors/colors';

export default SplashScreen = ({navigation}) => {
  useEffect(() => {
    getCurrentUser();
  }, []);

  const getCurrentUser = () => {
    setTimeout(async () => {
      const currentUser = await GoogleSignin.getCurrentUser();
      if (currentUser) navigation.replace('Home');
      else navigation.replace('Login');
    }, 500);
  };
  return (
    <View
      style={{
        backgroundColor: COLORS.PRIMARY,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: COLORS.TEXT}}>SplashScreen</Text>
    </View>
  );
};
