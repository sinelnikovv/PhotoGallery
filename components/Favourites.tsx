import { View } from "react-native";
import PhotoItem from "./PhotoItem";
import { FlatList } from "react-native";
import { useAppSelector } from "./hooks";



const Favourites = () => {

  const favourites = useAppSelector((state) => state.favourite)

  return (
    <View>
      <FlatList
        data={favourites}
        numColumns={2}
        horizontal={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <PhotoItem item={item} />}
      />
    </View>
  );
};

export default Favourites;
