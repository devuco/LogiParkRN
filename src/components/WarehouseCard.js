import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const WarehouseCard = ({item}) => {
  return (
    <View style={styles.parent}>
      <Image style={styles.image} source={{uri: item.image[0]}} />
      <Text style={styles.heading}>{item.name}</Text>
      <Text style={styles.subHeading}>{item.address}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    margin: 10,
    backgroundColor: 'goldenrod',
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
