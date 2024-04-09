import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Store from './components/store'
import Ads from './components/ads'
import Menu from './components/menu'
import Posts from './components/posts'

const Home = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: "#71dc46"
      }}
    >
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
          height: 'auto',
        }}
      >
        <Store />
        <Ads />
        <Menu />
        <Posts title='' content='' />
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