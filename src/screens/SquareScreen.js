import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";

import ColorCounter from "../components/ColorCounter";

const INCREMENT = 15;

const reducer = (state, action) => {
  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };

    case "change_green":
      return state.green + action.payload > 255 || state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };

    case "change_blue":
      return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };

    default:
      return state;
  }
}

const SquareScreen = () => {

  const [{ red, green, blue }, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  return (
    <View>
      <ColorCounter
        onIncrease={() => dispatch({ type: "change_red", payload: INCREMENT })}
        onDecrease={() => dispatch({ type: "change_red", payload: INCREMENT * -1 })}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => dispatch({ type: "change_green", payload: INCREMENT })}
        onDecrease={() => dispatch({ type: "change_green", payload: INCREMENT * -1 })}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => dispatch({ type: "change_blue", payload: INCREMENT })}
        onDecrease={() => dispatch({ type: "change_blue", payload: INCREMENT * -1 })}
        color="Blue"
      />
      <Text>Output</Text>
      <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
