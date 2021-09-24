import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {COLORS} from '../colors/colors';
import auth from '@react-native-firebase/auth';

export default SplashScreen = ({navigation}) => {
  useEffect(() => {
    getCurrentUser();
  }, []);

  const getCurrentUser = async () => {
    const currentUser = auth().currentUser;
    console.log(auth().currentUser);
    console.log(await GoogleSignin.getCurrentUser());
    if (currentUser) navigation.replace('Tabs');
    else navigation.replace('Login');
  };
  return (
    <View
      style={{
        backgroundColor: COLORS.PRIMARY,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: COLORS.ACCENT}}>SplashScreen</Text>
    </View>
  );
};
