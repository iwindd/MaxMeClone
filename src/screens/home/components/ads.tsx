import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const Ads = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.card}>
        <Text style={styles.title}>เริ่มต้นใช้งาน Max Me</Text>
        <Text style={styles.content}>เหลิดเหล็นกับสิทธิพิเศษมากมาอสำหรับสมาชิก Max Card</Text>
        <Pressable style={styles.button} >
          <Text style={styles.buttontext}>เข้าสู่ระบบ</Text>
        </Pressable>
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

export default Ads;
