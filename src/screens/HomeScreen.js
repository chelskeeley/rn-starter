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
      <Button
        title="Go To Color Demo"
        onPress={() => navigate("Color")}
      />
      <Button
        title="Go To Square Demo"
        onPress={() => navigate("Square")}
      />
      <Button
        title="Go To Text Demo"
        onPress={() => navigate("Text")}
      />
      <Button
        title="Go To Box Demo"
        onPress={() => navigate("Box")}
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
