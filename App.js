import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import { Provider } from "react-redux";
import {store} from "./store";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <Provider store={store}>
          <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Restaurant" component={RestaurantScreen} />
                </Stack.Navigator>
          </NavigationContainer>
      </Provider>
  );
}

