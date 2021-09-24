import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [image, setImage] = useState();
  useEffect(() => {
    const data = auth().currentUser;
    setUserData(data);
    setImage(data.photoURL.replace('s96-c', 's300-c'));
  }, []);
  return (
    <ScrollView>
      <View style={styles.parent}>
        <Image source={{uri: image}} style={styles.image} />
        <Text style={styles.heading}>{userData.displayName}</Text>
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
