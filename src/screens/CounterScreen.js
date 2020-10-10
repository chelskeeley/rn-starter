import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const INCREMENT = 1;

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + INCREMENT };
    case "decrement":
      return { counter: state.counter - INCREMENT };

    default:
      return state;
  }
}

const CounterScreen = () => {
  const [{ counter }, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <View>
      <Button title="Increase" onPress={() => dispatch({ type: "increment" })} />
      <Button title="Decrease" onPress={() => dispatch({ type: "decrement" })} />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
