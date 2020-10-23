import React, { useState, useEffect } from "react";
import { View, FlatList, Dimensions, Modal, Text } from "react-native";
import { SearchBar, Label, ListItem } from "../components";
import { Button, Overlay } from "react-native-elements";
import moment from "moment";
const { width, height, fontScale } = Dimensions.get("window");

export default function Popup({ visible, onClose }) {
  return (
    <Overlay
      isVisible={visible}
      fullScreen
      onBackdropPress={onClose}
      backdropStyle={{ backgroundColor: "blue", width, height }}
      overlayStyle={{
        backgroundColor: "red"
        // position: "absolute"
      }}
    >
      <Text>Hello from Overlay!</Text>
      <Button title="Open Overlay" onPress={() => console.log("a")} />
    </Overlay>
  );
}
