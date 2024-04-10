import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Col, Cols } from 'react-native-cols';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AppBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Cols style={styles.cols}>
          <Col span={2}>
            <Text style={styles.title}>LOGO</Text>
          </Col>
          <Col span={2} style={styles.nav}>
            <Icon name="notifications" size={22} style={styles.menuIcon} />
            <Icon name="person" size={27} style={styles.menuIcon} />
          </Col>
        </Cols>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cols: {
    marginTop: 30,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 10
  },
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
    color: 'white'
  },
  menuIcon: {
    color: 'white'
  },
});

export default AppBar;
