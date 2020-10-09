import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = ({ navigation: { navigate }}) => {
  return (
    <View>
      <Text style={styles.text}>Hi There!</Text>
      <Button
        title="Go To Components Demo"
        onPress={() => navigate("Components")}
      />
      <Button
        title="Go To List Demo"
        onPress={() => navigate("List")}
      />
      <Button
        title="Go To Image Demo"
        onPress={() => navigate("Image")}
      />
      <Button
        title="Go To Counter Demo"
        onPress={() => navigate("Counter")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
