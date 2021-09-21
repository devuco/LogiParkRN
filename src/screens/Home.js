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
import {SliderBox} from 'react-native-image-slider-box';
import database from '@react-native-firebase/database';
import {WarehouseCard} from '../components';
import {COLORS} from '../colors/colors';

export default Home = ({navigation}) => {
  GoogleSignin.configure();
  const [data, setData] = useState([]);
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    database()
      .ref('Warehouses')
      .on('value', snapshot => {
        setData(Object.values(snapshot.val()));
      });
    database()
      .ref('Banners')
      .on('value', snapshot => {
        setBanners(Object.values(snapshot.val()));
      });
  }, []);

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      navigation.replace('Login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <SliderBox images={banners} autoplay circleLoop disableOnPress />
      <Text style={styles.heading}>Top picks for you</Text>
      <FlatList
        horizontal
        data={data}
        renderItem={({item}) => (
          <WarehouseCard item={item} navigation={navigation} />
        )}
        keyExtractor={(item, index) => index}
      />
      <Button title="Signout" onPress={signOut}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: COLORS.PRIMARY,
    marginHorizontal: 10,
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
