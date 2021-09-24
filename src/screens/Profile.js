import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, View, Text, Button} from 'react-native';
import auth from '@react-native-firebase/auth';

const Profile = ({navigation}) => {
  GoogleSignin.configure();
  const [userData, setUserData] = useState({});
  const [image, setImage] = useState();
  useEffect(() => {
    const data = auth().currentUser;
    setUserData(data);
    setImage(data.photoURL.replace('s96-c', 's300-c'));
  }, []);

  const signOut = async () => {
    await auth()
      .signOut()
      .then(await GoogleSignin.signOut().then(navigation.replace('Login')));
  };

  return (
    <ScrollView>
      <View style={styles.parent}>
        <Image source={{uri: image}} style={styles.image} />
        <Text style={styles.heading}>{userData.displayName}</Text>
        <Button title="Signout" onPress={signOut}></Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  parent: {
    alignItems: 'center',
    marginTop: 50,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 1000,
  },
  heading: {
    textAlign: 'center',
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
});
export default Profile;
