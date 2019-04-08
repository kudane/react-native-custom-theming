# A Custom Theming for React Native
![npm](https://img.shields.io/npm/v/react-native-custom-theming.svg?label=npm)
[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org) 

> :+1: ใช้งานง่าย

> :+1: กำหนดธีมยังไงก็ได้ แล้วแต่คุณ

> :+1: ไม่มี dependency


---

## Table of Contents

- [Installation](#installation)
    - [Add package](#add-package)
    - [Setup](#setup)   
    - [Usage](#usage)
- [Method & Variable](#method--variable)


---

## Installation

### Add package

```
$ npm i react-native-custom-theming
```
```sh
$ yarn add react-native-custom-theming
```

### Setup

- สร้างโพลเดอร์ themeProvider `(require)`
- สร้างไฟล์ index.js ที่ themeProvider `(require)`
- สร้างไฟล์ styles.js ที่ themeProvider `(optional)`

```
// ตัวอย่าง

src
└───themeProvider
│     └──index.js    
│     └──styles.js
│   
...
```

```js
// index.js

import { createTheme } from "react-native-custom-theming";
import { lightBlueTheme, lightPinkTheme } from "./styles";

export const { StyleSheet, Theme, withTheme } = createTheme(lightBlueTheme);

export const changeLightBlueTheme = () => Theme.setTheme(lightBlueTheme);
export const changeLightPinkTheme = () => Theme.setTheme(lightPinkTheme);
```

```js
// styles.js

export const lightBlueTheme = {
  colors: {
    primary: "#b0bec5",
    primaryLight: "#e2f1f8",
    primaryDark: "#808e95",
    accent: "#000000"
  },
  toolbar: {
    width: "100%",
    height: 56
  }
};

export const lightPinkTheme = {
  colors: {
    primary: "#ffcdd2",
    primaryLight: "#ffffff",
    primaryDark: "#cb9ca1",
    accent: "#000000"
  },
  toolbar: {
    width: "100%",
    height: 56
  }
};
```

### Usage

- ใช้ withTheme ครอบ main-component `(require)`
- ใช้ StyleSheet.create(...) `(require)`

```js
// ใช้ withTheme ครอบ main-component, เพื่ออัพเดททั้งแอพพลิเคชั่น

import { withTheme } from "../themeProvider";

const App = () => (
   <View style={{ flex: 1 }}>
     <Toolbar />
     <SectionOne />
     </View>
   </View>
);

export default withTheme(App);
```

```js
// สร้าง style ด้วย StyleSheet.create()

import { StyleSheet } from "../themeProvider";

const styles = StyleSheet.create(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primaryDark
  }
}));

const SectionOne = () => <View style={styles.container} />;

export default SectionOne;
```

---

### Method & Variable

| Method         | Description                                                   |
| -------------- | ------------------------------------------------------------- |
| createTheme    | **ฟังชั่นสร้างธีม** โดยรับพารามิเตอร์ธีมตั้งต้นเข้าไป และส่งตัวแปรออกมาดังนี้ `Theme` `StyleSheet` และ `withTheme` |
| setTheme       | **ฟังก์ชั่นกำหนดธีมใหม่** โดยใช้ผ่านตัวแปร Theme ดังนี้ `Theme.setTheme(newTheme)` |
| create         | **ฟังก์ชั่นสร้างรูปแบบธีม** โดยใช้ผ่านตัวแปร StyleSheet ดังนี้ `StyleSheet.create(function)` |

| Variable       | Description                                                   |
| -------------- | ------------------------------------------------------------- |
| Theme          | ตัวแปรจัดการธีมและเปลี่นนธีม มีฟังก์ชั่นดังนี้ `setTheme()` |
| StyleSheet     | ตัวแปรสร้างรูปแบบธีม มีฟังก์ชั่นดังนี้ `create(newTheme)` |
| withTheme      | ตัวแปร high order function เพื่อ wrap-component ที่ต้องการอัพเดทเมื่อธีมถูกเปลี่ยน **สามารถส่งเพียง Main-Component เพื่ออัพเดททั้งแอพพลิเคชั่น** |


---

## License

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
