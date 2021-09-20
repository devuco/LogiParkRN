import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React, {useEffect, useState} from 'react';
import {
  View,
  Button,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
} from 'react-native';
import database from '@react-native-firebase/database';
import {WarehouseCard} from '../components';

export default Home = ({navigation}) => {
  const reference = database().ref('Warehouses');
  GoogleSignin.configure();
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log('log');
    database()
      .ref('Warehouses')
      .on('value', snapshot => {
        console.log('log2');
        setData(Object.values(snapshot.val()));
        console.log(snapshot.val());
      });
  }, []);

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      console.log('Signed out');
      navigation.replace('Login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text style={styles.heading}>Top picks for you</Text>
      <FlatList
        horizontal
        data={data}
        renderItem={({item}) => <WarehouseCard item={item} />}
        keyExtractor={(item, index) => index}
      />
      <Button title="Signout" onPress={signOut}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: 'goldenrod',
    marginHorizontal: 10,
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
