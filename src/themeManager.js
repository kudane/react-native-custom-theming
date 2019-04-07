import { StyleSheet } from "./styleSheetManager";

let listenners = [];

class ThemeManager {
  constructor() {
    this.theme = null;
  }

  getTheme() {
    return this.theme;
  }

  setTheme(newTheme) {
    this.theme = newTheme;
    StyleSheet.updateStyle();
    listenners.forEach(element => element.forceUpdate());
  }

  addListener(obj) {
    listenners.push(obj);
  }

  removeListener(obj) {
    listenners = listenners.filter(element => element !== obj);
  }
}

export const Theme = new ThemeManager();
