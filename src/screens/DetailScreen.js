import React, { useState, useEffect } from "react";
import { View, FlatList, Dimensions, Modal } from "react-native";
import { SearchBar, Label, ListItem, Popup } from "../components";

import moment from "moment";
const { width, height, fontScale } = Dimensions.get("window");

export default function DetailScreen({
  navigation: { setOptions, goBack },
  route: {
    params: { repoName, userName }
  }
}) {
  const [commitsArray, setCommitsArray] = useState([]);
  const [popup, setPopup] = useState(false);
  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <Label style={{ marginLeft: 2 }} type="header" onPress={() => goBack()}>
          Back
        </Label>
      ),
      title: `${repoName}`
    });
    if (repoName && userName) getCommitsDetail();
  }, []);

  async function getCommitsDetail() {
    let formattedRepoName = repoName.toLowerCase().trim();
    let formattedUserName = userName.toLowerCase().trim();
    const url = `https://api.github.com/repos/${formattedUserName}/${formattedRepoName}/commits`;
    let res = await fetch(url).then((res) => res.json());
    if (res.length) setCommitsArray(res);
    else setCommitsArray([]);
  }

  function renderHeader() {
    return <Label type="header">{`${userName}/${repoName}`}</Label>;
  }

  function renderBody() {
    return (
      <FlatList
        data={commitsArray}
        keyExtractor={(item) => item.sha}
        style={{ maxHeight: height * 0.75, width: "100%", marginTop: 25 }}
        contentContainerStyle={{ paddingBottom: 50 }}
        renderItem={({
          item: {
            commit: {
              message,
              author: { name, date }
            }
          }
        }) => (
          <ListItem
            title={message}
            subtitle={moment(date).format("lll")}
            onPress={() => setPopup(true)}
          />
        )}
      />
    );
  }

  function renderPopup() {
    if (popup) return <Popup visible={popup} onClose={() => setPopup(false)} />;
  }

  return (
    <View style={{ flex: 1, paddingHorizontal: 50, paddingVertical: 10 }}>
      {renderHeader()}
      {renderBody()}
      {renderPopup()}
    </View>
  );
}
