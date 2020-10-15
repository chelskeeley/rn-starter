import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle}></View>
      <View style={styles.viewTwoStyle}></View>
      <View style={styles.viewThreeStyle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  viewOneStyle: {
    height: 100,
    width: 100,
    backgroundColor: "rgba(255, 0, 0, 0.5)"
  },
  viewTwoStyle: {
    height: 100,
    width: 100,
    backgroundColor: "rgba(0, 255, 0, 0.5)",
    top: 50
  },
  viewThreeStyle: {
    height: 100,
    width: 100,
    backgroundColor: "rgba(0, 0, 255, 0.5)"
  },
});

export default BoxScreen;
