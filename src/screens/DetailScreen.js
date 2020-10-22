import React, { useState, useEffect } from "react";
import { Button, View, FlatList, Dimensions } from "react-native";
import { SearchBar, Label, ListItem } from "../components";
const { width, height, fontScale } = Dimensions.get("window");

export default function DetailScreen({
  navigation: { setOptions, goBack },
  route: {
    params: { repoName, userName }
  }
}) {
  const [commitsArray, setCommitsArray] = useState([]);

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
    //https://api.github.com/repos/dmarselus/roombachallenge/commits
    const url = `https://api.github.com/repos/${formattedUserName}/${formattedRepoName}/commits`;
    let res = await fetch(url).then((res) => res.json());
    console.log(res);
    if (res.length) setCommitsArray(res);
    else setCommitsArray([]);
  }

  function renderHeader() {
    return <Label type="header">{repoName}</Label>;
  }

  function renderBody() {
    return (
      <FlatList
        data={commitsArray}
        style={{ maxHeight: height * 0.75, width: "100%", marginTop: 25 }}
        contentContainerStyle={{ paddingBottom: 50 }}
        renderItem={({ item: { name, owner } }) => (
          <ListItem
            title={name}
            subtitle={owner?.login}
            onPress={(a) => console.log("a")}
          />
        )}
      />
    );
  }
  return (
    <View style={{ flex: 1, paddingHorizontal: 50, paddingVertical: 10 }}>
      {renderHeader()}
      {renderBody()}
    </View>
  );
}
