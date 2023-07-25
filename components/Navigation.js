import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSelector } from "react-redux";
import { Badge } from "@rneui/themed";
import React from "react";
import Photos from "./Photos";
import Favourites from "./Favourites";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
  },
});

export default Navigation = () => {
  const Tab = createMaterialTopTabNavigator();
  const favourites = useSelector((state) => state.favourite);
  return (
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
        <Tab.Screen
          name="Favourites"
          component={Favourites}
          options={{
            tabBarBadge: () => {
              return (
                <Badge
                  status="primary"
                  value={favourites.length}
                  containerStyle={{ position: "absolute", top: 5, right: 5 }}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
