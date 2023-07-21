import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import Photos from "./components/Photos";
import Favourites from "./components/Favourites";
import { PersistGate } from "redux-persist/integration/react";
import Loader from "./components/Loader";
Loader

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
  },
});

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loader/>} persistor={persistor}>
        <NavigationContainer>
          <Tab.Navigator
            tabBarPosition="bottom"
            screenOptions={{
              tabBarLabelStyle: { fontSize: 15, paddingBottom: 10 },
              tabBarActiveBackgroundColor: "#1976d2",
              tabBarActiveTintColor: "#1976d2",
            }}
            sceneContainerStyle={styles.container}
          >
            <Tab.Screen name="Photos" component={Photos} />
            <Tab.Screen name="Favourites" component={Favourites} />
          </Tab.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
