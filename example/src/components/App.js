import React from "react";
import { View } from "react-native";
import Toolbar from "./Toolbar";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import FloatButton from "./FloatButton";

import { withTheme } from "../themeProvider";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Toolbar />
      <View style={{ flex: 1 }}>
        <SectionOne />
        <SectionTwo />
        <FloatButton />
      </View>
    </View>
  );
};

export default withTheme(App);
