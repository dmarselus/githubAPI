import React, { Component, useState } from "react";
import { SearchBar as SearchBarElements } from "react-native-elements";

export default function SearchBar({
  value,
  onChangeText,
  placeholder = "Type Here..."
}) {
  return (
    <SearchBarElements
      placeholder={placeholder}
      searchIcon={null}
      round
      platform="ios"
      onChangeText={(text) => onChangeText(text)}
      value={value}
    />
  );
}
