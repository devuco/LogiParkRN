import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {COLORS} from '../colors/colors';

const Details = ({route}) => {
  const {name, image, address} = route.params.uid;
  const warehouse = route.params.uid;
  return (
    <ScrollView>
      <View>
        <SliderBox images={image} circleLoop />
        <View style={{backgroundColor: COLORS.PRIMARY}}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.address}>{address}</Text>
        </View>
        <Text style={styles.heading}>Specifications</Text>
        <View style={styles.bigCard}>
          <View>
            <Item heading="Building type" subHeading={warehouse.type} />
            <Item
              heading="Product to be stored"
              subHeading={warehouse.product}
            />
            <Item heading="Carpet Area" subHeading={warehouse.carpet_area} />
            <Item
              heading="Plinth Height"
              subHeading={warehouse.plinth_height}
            />
            <Item
              heading="Height of Eaves"
              subHeading={warehouse.eaves_height}
            />
            <Item heading="Floor Load" subHeading={warehouse.flooring} />
            <Item heading="Ventilation" subHeading={warehouse.ventilation} />
            <Item heading="No. of Docks" subHeading={warehouse.docks} />
          </View>
          <View style={{flexWrap: 'wrap'}}>
            <Item heading="Water Tank" subHeading={warehouse.water_tank} />
            <Item heading="Power Availability" subHeading={warehouse.power} />
            <Item
              heading="Lighting Lux Level"
              subHeading={warehouse.lighting}
            />
            <Item
              heading="Dock Leveller"
              subHeading={warehouse.dock_leveller}
            />
            <Item heading="Mezzanine" subHeading={warehouse.mezzanine} />
            <Item heading="No. of Shutters" subHeading={warehouse.shutters} />
            <Item
              heading={`Loading Undloading\napron area`}
              subHeading={warehouse.loading_area}
            />
            <Item heading="Land Use" subHeading={warehouse.land_use} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const Item = ({heading, subHeading}) => (
  <View style={{flex: 1, width: '100%'}}>
    <Text style={styles.propHead}>{heading}</Text>
    <Text>{subHeading}</Text>
  </View>
);

const styles = StyleSheet.create({
  bigCard: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    margin: 10,
    borderRadius: 20,
    backgroundColor: '#cccccc',
    justifyContent: 'space-between',
    padding: 20,
  },
  name: {
    textAlign: 'center',
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  address: {
    textAlign: 'center',
    fontSize: 18,
    margin: 10,
  },
  heading: {
    color: COLORS.PRIMARY,
    marginHorizontal: 10,
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
  propHead: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default Details;
