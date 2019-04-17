import React from "react";
import { ToolbarAndroid } from "react-native";
import { StyleSheet } from "../themeProvider";

const styles = StyleSheet.create(theme => ({
  container: {
    ...theme.toolbar,
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
  title: {
    color: theme.colors.accent
  }
}));

const Toolbar = () => (
  <ToolbarAndroid
    title="AwesomeApp"
    titleColor={styles.title.color}
    style={styles.container}
  />
);

export default Toolbar;
