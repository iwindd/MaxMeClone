import React from 'react';
import { View, StyleSheet, Dimensions, Text, Image, ImageURISource } from 'react-native';
import { IconProps } from 'react-native-vector-icons/Icon';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');
const itemWidth = width / 5;

interface MenuItem {
  title: string,
  styles?: any,
  notice?: string,
  logo?: IconProps,
  image?: ImageURISource
}


const Item = (props: { item: MenuItem }) => {
  const item = props.item

  return (
    <View>
      <View style={[styles.itemLogo, ...(item.styles || [])]}>
        {
          item.logo ? (
            <Icon {...item.logo} style={styles.itemIcon}></Icon>
          ) : (
            <Image
              style={styles.itemImg}
              source={item.image}
            ></Image>
          )
        }
      </View>
      <Text style={styles.itemTitle}>{item.title}</Text>
    </View>
  )
};

const Menu = () => {
  const items: MenuItem[] = [
    { title: "โอนเงิน", logo: { name: "north", size: 27 } },
    { title: "จ่ายบิล", logo: { name: "receipt", size: 27 } },
    { title: "เติมเงิน", logo: { name: "payment", size: 27 } },
    { title: "ประกันออนไลน์", logo: { name: "shield", size: 27 } },
    { title: "ลุงทุน Maxbit", notice: "มาใหม่", image: require('../../../../assets/images/menus/maxbit.png') },
    { title: "สินเชื่อด่วน", logo: { name: "handshake", size: 27 } },
    { title: "สินเชื่อทะเบียนรถ", logo: { name: "directions-car", size: 27 } },
    { title: "ไลฟ์สไตล์ & ท่องเที่ยว", logo: { name: "airplane-ticket", size: 27 } },
    { title: "Max มู", logo: { name: "search", size: 27 } },
    { title: "ดูทั้งหมด", image: require('../../../../assets/images/menus/all.png'), styles: [menuStyles.seeAll] },
  ]

  const rows = [];
  for (let i = 0; i < items.length; i += 5) {
    const rowItems = items.slice(i, i + 5);
    rows.push(
      <View key={i} style={styles.row}>
        {rowItems.map((item, index) => (
          <View
            key={index}
            style={[styles.item]}
          >
            {
              item.notice ? (<Text style={styles.notice}>{item.notice}</Text>) : null
            }
            <Item item={item} />
          </View>
        ))}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {rows}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 'auto',
  },
  row: {
    flexDirection: 'row',
  },
  item: {
    width: itemWidth,
    height: 'auto',
    paddingBottom: 4
  },
  itemIcon: {
    color: 'white'
  },
  itemImg: {
    width: '100%',
    height: '100%'
  },
  notice: {
    position: 'absolute',
    top: -5,
    right: 2,
    zIndex: 2,
    backgroundColor: 'red',
    color: 'white',
    fontSize: 10,
    paddingVertical: 1,
    paddingHorizontal: 5,
    borderRadius: 10
  },
  itemLogo: {
    backgroundColor: '#72c93e',
    borderRadius: 4,
    marginHorizontal: 16,
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    overflow: 'hidden'
  },
  itemTitle: {
    textAlign: "center",
    marginTop: 4
  }
});

const menuStyles = StyleSheet.create({
  seeAll: {
    backgroundColor: '#fff',
    borderWidth: 1.5,
    borderColor: "#dae1ed"
  }
})

export default Menu;
