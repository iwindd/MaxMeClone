import { Header } from '@rneui/base'
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Store from './components/store'
import Ads from './components/ads'
import Menu from './components/menu'
import Posts from './components/posts'

const Home = () => {
  return (
    <ScrollView>
      <View
        style={{
          width: '100%',
          padding: 30
        }}
      >
        <Text style={styles.welcome}>สวัสดี</Text>
        <Text style={styles.welcome}>แมกซ์ มี ยินดีต้อนรับ</Text>
      </View>
      <ScrollView
        style={{
          backgroundColor: "white",
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          height: 1000,
        }}
      >
        <Store />
        <Ads />
        <Menu />
        <Posts />
      </ScrollView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'white'
  }
});

export default Home