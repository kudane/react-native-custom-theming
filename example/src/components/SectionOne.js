import React from "react";
import { View } from "react-native";
import { StyleSheet } from "../themeProvider";

const styles = StyleSheet.create(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primaryDark
  }
}));

const SectionOne = () => <View style={styles.container} />;

export default SectionOne;
