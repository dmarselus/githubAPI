import React, { useState } from "react";
import { Button, View, FlatList, Dimensions } from "react-native";
import { SearchBar, Label, ListItem } from "../components";
const { height } = Dimensions.get("window");

export default function HomeScreen({ navigation: { navigate } }) {
  //query state for search bar
  const [query, setQuery] = useState("");

  //repo array for storing repositories from given query
  const [repoArray, setRepoArray] = useState([]);

  /**
   * @getUsername function
   *
   * @param  username = string
   * @return void
   * @description format given params to call the github api and set
   *              repoArray from the result
   */
  async function getUsername(username) {
    username = username.toLowerCase().trim();
    const url = `https://api.github.com/users/${username}/repos`;
    let res = await fetch(url).then((res) => res.json());
    if (res.length) setRepoArray(res);
    else setRepoArray([]);
  }

  /**
   * @renderHeader function
   *
   * @param  none
   * @return JSX
   * @description render Label,SearchBar and Submit Button
   */
  function renderHeader() {
    return (
      <View>
        <Label type="header">Username</Label>
        <SearchBar
          onClear={() => setRepoArray([])}
          value={query}
          onChangeText={(text) => setQuery(text)}
        />
        <Button onPress={() => getUsername(query)} title="Submit" />
      </View>
    );
  }

  /**
   * @renderBody function
   *
   * @param  none
   * @return JSX
   * @description render FlatList with repo array
   */
  function renderBody() {
    return (
      <FlatList
        data={repoArray}
        style={{ maxHeight: height * 0.75, width: "100%", marginTop: 25 }}
        contentContainerStyle={{ paddingBottom: 50 }}
        renderItem={({ item: { name, owner } }) => (
          <ListItem
            title={name}
            subtitle={`owned by ${owner?.login}`}
            uri={owner?.avatar_url}
            onPress={() =>
              navigate("Detail", { repoName: name, userName: query })
            }
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
