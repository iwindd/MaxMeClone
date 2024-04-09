import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppBar from "./components/appbar";
import Home from "./screens/home";
import ETC from "./screens/etc";
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" />
      <Stack.Navigator
        screenOptions={{
          header: () => <AppBar/>,
          contentStyle: {
            backgroundColor: '#71dc47'
          }
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ETC" component={ETC} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}

export default App;
