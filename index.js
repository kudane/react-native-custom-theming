import { StyleSheet } from "./src/styleSheetManager";
import { Theme } from "./src/themeManager";
import { withTheme } from "./src/withTheme";

export const createTheme = theme => {
  Theme.theme = theme;

  return {
    Theme,
    StyleSheet,
    withTheme
  };
};
