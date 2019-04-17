import React from "react";
import { Text, Dimensions, TouchableOpacity } from "react-native";
import {
  StyleSheet,
  changeLightBlueTheme,
  changeLightPinkTheme
} from "../themeProvider";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create(theme => ({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 160,
    height: 160,
    position: "absolute",
    bottom: height * 0.5 - (80 + 56 - 20),
    right: width * 0.5 - 80,
    borderRadius: 100,
    backgroundColor: theme.colors.primary,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  text: {
    color: theme.colors.accent,
    fontSize: 16
  }
}));

let isABool = false;

const FloatButton = () => (
  <TouchableOpacity
    activeOpacity={0.5}
    style={styles.container}
    onPress={() => {
      if (isABool) {
        changeLightBlueTheme();
      } else {
        changeLightPinkTheme();
      }
      isABool = !isABool;
    }}
  >
    <Text style={styles.text}>SWITCH THEME</Text>
  </TouchableOpacity>
);

export default FloatButton;
