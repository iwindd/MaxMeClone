import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Posts = (props: {
  title: string,
  content: string
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.card}>
        <Text style={styles.title}></Text>
        <Text style={styles.content}></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
    marginTop: 15
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'green',
    marginTop: 20
  },
  content: {
    fontSize: 13,
  },
  button: {
    backgroundColor: '#5cbf4a',
    padding: 10,
    borderRadius: 7,
    marginTop: 5
  },
  buttontext: {
    textAlign: 'center',
    color: 'white'
  }
});

export default Posts;
