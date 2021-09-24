import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

const Details = ({route}) => {
  const {name, image, address} = route.params.uid;
  return (
    <View>
      <SliderBox images={image} autoplay circleLoop />
      <Text style={styles.heading}>{name}</Text>
      <Text style={styles.subHeading}>{address}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {},
  heading: {
    textAlign: 'center',
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  subHeading: {
    textAlign: 'center',
    fontSize: 18,
    margin: 10,
  },
});

export default Details;
