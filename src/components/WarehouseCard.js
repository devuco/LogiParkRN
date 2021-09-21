import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {COLORS} from '../colors/colors';

const WarehouseCard = ({item, navigation}) => {
  const _onPress = () => {
    navigation.navigate('Details', {uid: item});
  };

  return (
    <TouchableOpacity onPress={_onPress} style={styles.parent}>
      <Image style={styles.image} source={{uri: item.image[0]}} />
      <Text style={styles.heading}>{item.name}</Text>
      <Text style={styles.subHeading}>{item.address}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  parent: {
    margin: 10,
    backgroundColor: COLORS.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: 200,
    height: 150,
    resizeMode: 'cover',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    margin: 5,
  },
  subHeading: {
    fontSize: 15,
    marginBottom: 10,
  },
});

export default WarehouseCard;
