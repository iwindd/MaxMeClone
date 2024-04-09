import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "react-native";

// components
import CustomTabBar from "./components/bottomtabs";
import AppBar from "./components/appbar";

//screens
import Home from "./screens/home";
import ETC from "./screens/etc";

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" />
      <Tab.Navigator
        tabBar={props => <CustomTabBar {...props} />}
        screenOptions={{
          header: () => <AppBar />
        }}
      >
        <Tab.Screen name="Home" component={Home} options={{ title: "หน้าหลัก" }} />
        <Tab.Screen name="Orders" component={ETC} options={{ title: "ออเดอร์" }} />
        <Tab.Screen name="Rewards" component={ETC} options={{ title: "ของรางวัล" }} />
        <Tab.Screen name="ETC" component={ETC} options={{ title: "อื่นๆ" }} />
      </Tab.Navigator>
    </NavigationContainer >
  );
}

export default App;
