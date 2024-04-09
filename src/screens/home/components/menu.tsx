import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const itemWidth = width / 5; // Width of each grid item

const Menu = () => {
  return (
    <View style={styles.container}>
      {/* First Row */}
      <View style={styles.row}>
        <View style={styles.item}></View>
        <View style={styles.item}></View>
        <View style={styles.item}></View>
        <View style={styles.item}></View>
        <View style={styles.item}></View>
      </View>
      {/* Second Row */}
      <View style={styles.row}>
        <View style={styles.item}></View>
        <View style={styles.item}></View>
        <View style={styles.item}></View>
        <View style={styles.item}></View>
        <View style={styles.item}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
  },
  item: {
    width: itemWidth,
    height: itemWidth, // assuming square grid items
    borderWidth: 1,
    borderColor: '#000',
  },
});

export default Menu;
