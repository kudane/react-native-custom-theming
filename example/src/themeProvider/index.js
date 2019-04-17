import { createTheme } from "react-native-custom-theming";
import { lightBlueTheme, lightPinkTheme } from "./styles";

export const { StyleSheet, Theme, withTheme } = createTheme(lightBlueTheme);

export const changeLightBlueTheme = () => Theme.setTheme(lightBlueTheme);

export const changeLightPinkTheme = () => Theme.setTheme(lightPinkTheme);
