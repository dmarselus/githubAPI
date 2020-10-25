import React, { useState, useEffect } from "react";
import { View, FlatList, Dimensions } from "react-native";
import { Label, ListItem } from "../components";
import moment from "moment";
const { width, height, fontScale } = Dimensions.get("window");

export default function DetailScreen({
  navigation: { setOptions, goBack, navigate },
  route: {
    params: { repoName, userName }
  }
}) {
  //Array for commits that is used to store commits
  //after fetching from github api and rerender the page
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

  /**
   * @getCommitsDetail function
   *
   * @param  none
   * @return void
   * @description format screens params to call the github api and set
   *              commitArray from the result
   */
  async function getCommitsDetail() {
    let formattedRepoName = repoName.toLowerCase().trim();
    let formattedUserName = userName.toLowerCase().trim();
    const url = `https://api.github.com/repos/${formattedUserName}/${formattedRepoName}/commits`;
    let res = await fetch(url).then((res) => res.json());
    if (res.length) setCommitsArray(res);
    else setCommitsArray([]);
  }

  /**
   * @renderHeader function
   *
   * @param  none
   * @return JSX
   * @description render Label with screen params
   */
  function renderHeader() {
    return <Label type="header">{`${userName}/${repoName}`}</Label>;
  }

  /**
   * @renderBody function
   *
   * @param  none
   * @return JSX
   * @description render FlatList with commits array
   */
  function renderBody() {
    return (
      <FlatList
        data={commitsArray}
        keyExtractor={(item) => item.sha}
        style={{ maxHeight: height * 0.75, width: "100%", marginTop: 25 }}
        contentContainerStyle={{ paddingBottom: 50 }}
        renderItem={({ item }) => {
          let {
            sha,
            commit: {
              message,
              author: { name, date }
            }
          } = item;
          return (
            <ListItem
              title={message}
              subtitle={moment(date).format("lll")}
              extraText={`${name}\nSha: ${sha}`}
              onPress={() => navigate("Commit", { commitObject: item })}
            />
          );
        }}
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
