import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";

import ColorCounter from "../components/ColorCounter";

const INCREMENT = 15;

const reducer = (state, action) => {
  switch (action.colorToChange) {
    case "red":
      return {...state, red: state.red + action.amount};

    case "green":
      return { ...state, green: state.green + action.amount };

    case "blue":
      return { ...state, blue: state.blue + action.amount };

    default:
      return state;
  }
}

const SquareScreen = () => {

  const [{ red, green, blue }, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  return (
    <View>
      <ColorCounter
        onIncrease={() => dispatch({ colorToChange: "red", amount: INCREMENT })}
        onDecrease={() => dispatch({ colorToChange: "red", amount: INCREMENT * -1 })}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => dispatch({ colorToChange: "green", amount: INCREMENT })}
        onDecrease={() => dispatch({ colorToChange: "green", amount: INCREMENT * -1 })}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => dispatch({ colorToChange: "blue", amount: INCREMENT })}
        onDecrease={() => dispatch({ colorToChange: "blue", amount: INCREMENT * -1 })}
        color="Blue"
      />
      <Text>Output</Text>
      <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
