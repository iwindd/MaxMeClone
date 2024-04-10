import React from 'react';
import { View, StyleSheet, ScrollView, Image, ImageURISource } from 'react-native';

const Card = (props: {
  image: ImageURISource
}) => {
  return (
    <View style={styles.card}>
      <Image source={props.image} style={styles.image} />
    </View>
  );
};

const Posts = () => {
  const posts: ImageURISource[] = [
    require('../../../../assets/images/posts/1.jpg'),
    require('../../../../assets/images/posts/2.jpg'),
    require('../../../../assets/images/posts/3.jpg')
  ]

  return (
    <ScrollView style={styles.wrapper}>
      {
        posts.map((img, index) => <Card key={index} image={img} />)
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
    height: 'auto'
  },
  card: {
    backgroundColor: '#000',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 15,
    height: 160
  },
  image: {
    width: '100%',
    height: '100%'
  }
});

export default Posts;
