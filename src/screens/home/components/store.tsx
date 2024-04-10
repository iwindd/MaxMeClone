import React from 'react';
import { FlatList, View, Text, StyleSheet, Image, ImageURISource } from 'react-native';

const Store = () => {
  const data = [
    { id: '1', text: 'สั่งพันธุ์ไทย', img: require('../../../../assets/images/stores/1.png') },
    { id: '2', text: 'สั่งแมกซ์มาร์ท', img: require('../../../../assets/images/stores/2.png') },
    { id: '3', text: 'สั่งน้ำมัน', img: require('../../../../assets/images/stores/3.png') },
    { id: '4', text: 'สั่งน้ำมันฉุกเฉิน', img: require('../../../../assets/images/stores/4.png') },
    { id: '5', text: 'Autobacs', img: require('../../../../assets/images/stores/5.png') },
  ];

  const renderItem = ({ item }: {
    item: {
      id: string,
      text: string,
      img: ImageURISource
    }
  }) => (
    <View>
      <View style={styles.itemIcon}>
        <Image
          style={styles.itemImage}
          source={item.img}
        />
      </View>
      <Text style={styles.itemTitle}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10
  },
  itemIcon: {
    backgroundColor: '#eaf7e5',
    width: 48,
    height: 48,
    borderRadius: 6,
    marginHorizontal: 16,
    padding: 5
  },
  itemImage: {
    width: '100%',
    height: '100%'
  },  
  itemTitle: {
    textAlign: "center",
    fontFamily: "Sarabun-Regular",
    fontSize: 12
  }
});

export default Store;
