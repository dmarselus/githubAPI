import React, { useEffect } from "react";
import { ScrollView, Dimensions } from "react-native";
import { Label } from "../components";
import ReactJson from "react-json-view";
const { width, height, fontScale } = Dimensions.get("window");
export default function CommitHash({
  navigation: { setOptions, goBack },
  route: {
    params: { commitObject }
  }
}) {
  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <Label style={{ marginLeft: 2 }} type="header" onPress={() => goBack()}>
          Back
        </Label>
      )
    });
  }, []);

  return (
    <ScrollView style={{ height, width, paddingBottom: height * 0.2 }}>
      <ReactJson src={commitObject} />
    </ScrollView>
  );
}
