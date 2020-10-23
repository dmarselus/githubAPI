import React, { useRef } from "react";
import { View, Text } from "react-native";
import { WebView } from "react-native-webview";

export default function CommitHash({
  navigation: { setOptions, goBack }
  // route: {
  //   params: { commitObject = null }
  // }
}) {
  const WebRef = useRef();
  let uri = "https://reactnative.dev/";
  return (
    // <View>
    <Text>asdasd</Text>
    // <WebView
    //   // ref={WebRef}
    //   source={{ uri: "https://reactnative.dev/" }}
    //   // bounces={false}
    //   // cacheEnabled={false}
    //   // injectedJavaScript={cleanScreenForUser}
    //   // javaScriptEnabledAndroid={true}
    //   // startInLoadingState={true}
    //   style={{ flex: 1 }}
    // />
    // </View>
  );
}
