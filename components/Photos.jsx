import { View, FlatList, StyleSheet, Text, TextInput } from "react-native";
import { useGetPhotosQuery } from "../api";
import Loader from "./Loader";
import PhotoItem from "./PhotoItem";
import { useEffect, useState } from "react";
import filter from "lodash.filter";

const styles = StyleSheet.create({
  search: {
    marginVertical: 10,
    marginHorizontal: 25,
    borderBottomWidth: 1,
    fontSize: 20,
  },
  error: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const Photos = () => {
  const { data, isLoading, isError } = useGetPhotosQuery();
  const [fullData, setFullData] = useState([]);
  const [search, setSearch] = useState("");
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    setFullData(data);
    setNewData(data);
  }, [data]);

  const handleSearch = (text) => {
    const filteredData = filter(fullData, (photo) => {
      return contains(photo, text.toLowerCase());
    });
    setNewData(filteredData);
    setSearch(text);
  };

  const contains = ({ title }, search) => {
    if (title.includes(search)) {
      return true;
    }
    return false;
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <View style={styles.error}>
          <Text>Some error...</Text>
        </View>
      ) : (
        <View>
          <TextInput
            style={styles.search}
            placeholder="Search..."
            value={search}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(text) => handleSearch(text)}
          />
          <FlatList
            data={newData}
            numColumns={2}
            horizontal={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <PhotoItem item={item} />}
          />
        </View>
      )}
    </>
  );
};

export default Photos;
