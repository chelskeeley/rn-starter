import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const ImageDetail = ({ imageScore, imageSource, title }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image score - {imageScore}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default ImageDetail;
