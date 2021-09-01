import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React from 'react';
import {View, Button} from 'react-native';

export default Home = () => {
  GoogleSignin.configure();
  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      console.log('Signed out');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View>
      <Button title="Signout" onPress={signOut}></Button>
    </View>
  );
};
