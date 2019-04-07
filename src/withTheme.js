import React from "react";
import { Theme } from "./themeManager";

export function withTheme(Wraper) {
  return class ThemeProvider extends React.Component {
    componentDidMount() {
      Theme.addListener(this);
    }

    componentWillUnmount() {
      Theme.removeListener(this);
    }

    render() {
      return <Wraper {...this.props} />;
    }
  };
}
