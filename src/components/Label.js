import React from "react";
import { StyleSheet, Text, Dimensions } from "react-native";
const { width, height, fontScale } = Dimensions.get("window");

export default function Label({ type = "normal", children }) {
  return <Text style={styles[type]}>{children}</Text>;
}

const styles = StyleSheet.create({
  header: {
    fontWeight: "bold",
    fontSize: fontScale * 15
  },
  normal: {
    fontSize: fontScale * 10
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "monospace, monospace"
  }
});
