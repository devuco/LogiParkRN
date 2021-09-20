import {
  GoogleSigninButton,
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import React from 'react';
import {View, Text} from 'react-native';
import {COLORS} from '../colors/colors';

export default Login = ({navigation}) => {
  GoogleSignin.configure({
    webClientId:
      '630444689179-m4jbqseo41a126tur8p0mp124n2b0nfj.apps.googleusercontent.com',
  });
  const signIn = async () => {
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth()
      .signInWithCredential(googleCredential)
      .then(navigation.replace('Home'));
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
