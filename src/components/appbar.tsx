import React from 'react';
import { Text } from '@rneui/base';
import { View, StyleSheet } from 'react-native';

const AppBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>LOGO</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 70, 
    paddingHorizontal: 10,
    backgroundColor: '#71dc47', 
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'white'
  },
  menuIcon: {
    padding: 10,
  },
});

export default AppBar;
