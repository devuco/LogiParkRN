import {
  GoogleSigninButton,
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import React from 'react';
import {View, Text} from 'react-native';
import {COLORS} from '../colors/colors';

export default Login = ({navigation}) => {
  GoogleSignin.configure();
  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      navigation.replace('Home');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  return (
    <View style={{flex: 1}}>
      <View style={{height: '70%', backgroundColor: COLORS.PRIMARY}}>
        <Text>Hello</Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          onPress={signIn}
          disabled={false}
        />
      </View>
    </View>
  );
};
