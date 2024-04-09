import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';

const { width } = Dimensions.get('window');
const itemWidth = width / 5; 

const Item = ({ text }: any) => (
  <View>
    <View style={styles.itemIcon}></View>
    <Text style={styles.itemTitle}>{text}</Text>
  </View>
);

const Menu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.item}><Item text="item" /></View>
        <View style={styles.item}><Item text="item" /></View>
        <View style={styles.item}><Item text="item" /></View>
        <View style={styles.item}><Item text="item" /></View>
        <View style={styles.item}><Item text="item" /></View>
      </View>
      <View style={styles.row}>
        <View style={styles.item}><Item text="item" /></View>
        <View style={styles.item}><Item text="item" /></View>
        <View style={styles.item}><Item text="item" /></View>
        <View style={styles.item}><Item text="item" /></View>
        <View style={styles.item}><Item text="item" /></View>
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
    height: 200,
    marginTop: -20
  },
  row: {
    flexDirection: 'row',
  },
  item: {
    width: itemWidth,
    height: itemWidth, 
  },
  itemIcon: {
    backgroundColor: '#72c93e',
    padding: 25,
    marginVertical: 4,
    borderRadius: 4,
    marginHorizontal: 16,
  },
  itemTitle: {
    textAlign: "center"
  }
});

export default Menu;
