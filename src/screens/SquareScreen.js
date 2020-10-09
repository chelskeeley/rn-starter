import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import ColorCounter from "../components/ColorCounter";

const INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    // color === "red", "green", "blue"
    // change === +15, -15
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;

      case "green":
        green + change > 255 || green + change < 0 ? null : setGreen(green + change);
        return;

      case "blue":
        blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
        return;
    }
  }

  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor("red", INCREMENT)}
        onDecrease={() => setColor("red", INCREMENT * -1)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setColor("green", INCREMENT)}
        onDecrease={() => setColor("green", INCREMENT * -1)}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => setColor("blue", INCREMENT)}
        onDecrease={() => setColor("blue", INCREMENT * -1)}
        color="Blue"
      />
      <Text></Text>
      <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
