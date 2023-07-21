import { View } from "react-native";
import PhotoItem from "./PhotoItem";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourite);
  return (
    <View>
      <FlatList
        data={favourites}
        numColumns={2}
        horizontal={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PhotoItem item={item} />}
      />
    </View>
  );
};

export default Favourites;
