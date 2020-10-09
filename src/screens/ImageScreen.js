import React from "react";
import { StyleSheet, View } from "react-native";
import ImageDetail from "../components/ImageDetail";
const forest = require("../../assets/forest.jpg");
const beach = require("../../assets/beach.jpg");
const mountain = require("../../assets/mountain.jpg");

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Forest" imageSource={forest} imageScore={9} />
      <ImageDetail title="Beach" imageSource={beach} imageScore={7} />
      <ImageDetail title="Mountain" imageSource={mountain} imageScore={4} />
    </View>
  );
}

const styles = StyleSheet.create({});

export default ImageScreen;
