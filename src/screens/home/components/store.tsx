import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

const Store = () => {
  const data = [
    { id: '1', text: 'Item 1' },
    { id: '2', text: 'Item 2' },
    { id: '3', text: 'Item 3' },
    { id: '4', text: 'Item 4' },
    { id: '5', text: 'Item 5' },
  ];

  const renderItem = ({ item }: any) => (
    <View>
      <View style={styles.itemIcon}></View>
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
  },
  itemIcon: {
    backgroundColor: '#eaf7e5',
    padding: 30,
    marginVertical: 8,
    borderRadius: 6,
    marginHorizontal: 16,
  },
  itemTitle: {
    textAlign: "center"
  }
});

export default Store;
