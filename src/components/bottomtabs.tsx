import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Menu {
  icon: string;
}

const Menus: { [key: string]: Menu } = {
  Home: {
    icon: "home"
  },
  Orders: {
    icon: "receipt"
  },
  Scan: {
    icon: "scanner"
  },
  Rewards: {
    icon: "redeem"
  },
  ETC: {
    icon: "apps"
  }
}

const CustomTabBar = ({ state, descriptors, navigation }: any) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;
        const isFocused = state.index === index;
        const Menu = Menus[route.name]
        const centered = Math.floor(state.routes.length / 2) == index

        if (!Menu) return null;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={[styles.tabItem, isFocused ? styles.tabItemFocused : null]}
          >
            <View style={[centered ? styles.tabParentCenter : styles.tabParent]}>
              <Icon
                name={Menu.icon}
                size={27}
                style={
                  [
                    styles.menuIcon,
                    isFocused ? styles.menuIconFocused : null,
                    centered ? styles.menuIconCentered : null
                  ]
                }
              />
              <Text
                style={
                  [
                    styles.tabText,
                    isFocused ? styles.tabTextFocused : null,
                    centered ? styles.menuIconCentered : null
                  ]
                }
              >
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#fff'
  },
  menuIcon: {},
  menuIconFocused: {
    color: 'orange'
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabParent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabParentCenter: {
    backgroundColor: "#59982d",
    marginTop: -60,
    borderRadius: 50,
    width: 78,
    height: 78,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIconCentered: {
    color: 'white'
  },
  tabItemFocused: {},
  tabTextFocused: {
    color: 'orange'
  },
  tabText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default CustomTabBar