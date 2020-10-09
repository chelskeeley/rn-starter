import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import ColorCounter from "../components/ColorCounter";

const INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (stateValue, change, setter) => {
    stateValue + change > 255 || stateValue + change < 0 ? null : setter(stateValue + change);
  }

  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor(red, INCREMENT, setRed)}
        onDecrease={() => setColor(red, INCREMENT * -1, setRed)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setColor(green, INCREMENT, setGreen)}
        onDecrease={() => setColor(green, INCREMENT * -1, setGreen)}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => setColor(blue, INCREMENT, setBlue)}
        onDecrease={() => setColor(blue, INCREMENT * -1, setBlue)}
        color="Blue"
      />
      <Text></Text>
      <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
