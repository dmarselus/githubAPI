import React, { Component, useState } from "react";
import { ListItem as ListItemElements, Avatar } from "react-native-elements";
import { Button, Image, StyleSheet, Text, View, FlatList } from "react-native";
import Label from "./Label";
export default function ListItem({ title, subtitle = "" }) {
  return (
    // <View style={{ width: "100%", backgroundColor: "purple" }}>
    //   <Label type="header">{title}</Label>.
    //   <Label type="header">{subtitle}</Label>
    // </View>

    <ListItemElements bottomDivider>
      <ListItemElements.Content>
        <ListItemElements.Title style={{ color: "black", fontWeight: "bold" }}>
          {title}
        </ListItemElements.Title>
        <ListItemElements.Subtitle>{subtitle}</ListItemElements.Subtitle>
      </ListItemElements.Content>
      <ListItemElements.Chevron />
    </ListItemElements>
  );
}
