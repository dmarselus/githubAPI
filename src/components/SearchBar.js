import React, { Component, useState } from "react";
import { Dimensions } from "react-native";
import { SearchBar as SearchBarElements } from "react-native-elements";

const { width, height, fontScale } = Dimensions.get("window");

export default function SearchBar({
  value,
  onChangeText,
  placeholder = "Type Here...",
  ...rest
}) {
  return (
    <SearchBarElements
      placeholder={placeholder}
      searchIcon={null}
      // inputContainerStyle={{height:height*.05}}
      // inputStyle={{ fontSize: fontScale * 10 }}
      round
      platform="ios"
      onChangeText={(text) => onChangeText(text)}
      value={value}
      {...rest}
    />
  );
}
