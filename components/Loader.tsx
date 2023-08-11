import { View, StyleSheet, ActivityIndicator } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
});

const Loader = () => {
  return (
    <View style={styles.loader} >
      <ActivityIndicator size="large" />
    </View>
  );
};

export default Loader;
