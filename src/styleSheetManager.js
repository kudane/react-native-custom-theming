import { Theme } from "./themeManager";

let _id = 0;
let _idStyle = 0;

// {
//   fnID: 0,
//   keyID: 0,
//   valueID: 0
// }
let containers = [];

let arrStyleFn = [];
let arrStyleKey = [];
let arrStyleValue = [];

class StyleSheetManager {
  getStyle(style) {
    if (typeof style === "function") {
      return style(Theme.getTheme());
    }

    return style;
  }

  create(style) {
    const listStyle = [];
    const styles = this.getStyle(style);

    arrStyleFn.push(style);

    Object.keys(styles).forEach(key => {
      arrStyleKey.push(key);
      arrStyleValue.push(styles[key]);

      const data = {
        fnID: _idStyle,
        keyID: _id,
        valueID: _id
      };

      containers.push(data);
      listStyle.push(data);

      _id += 1;
    });

    _idStyle += 1;

    const obj = {};

    listStyle.forEach(item => {
      Object.defineProperty(obj, arrStyleKey[item.keyID], {
        get: () => arrStyleValue[item.valueID]
      });
    });

    return obj;
  }

  updateStyle() {
    arrStyleFn.forEach((item, key) => {
      const styles = this.getStyle(item);
      const effects = containers.filter(f => f.fnID === key);
      effects.forEach(item => {
        arrStyleValue[item.valueID] = styles[arrStyleKey[item.keyID]];
      });
    });
  }
}

export const StyleSheet = new StyleSheetManager();
