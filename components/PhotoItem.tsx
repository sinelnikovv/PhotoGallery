import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { Dialog } from "@rneui/themed";
import Loader from "./Loader";
import { addToFavourite, deleteFromFavourite } from "./apiSlice";
import { useAppDispatch, useAppSelector } from "./hooks";
import { IItem } from "../store";

const styles = StyleSheet.create({
  relative: {
    position: "relative",
  },

  thumbnail: {
    width: 150,
    height: 150,
  },

  img: {
    width: "100%",
    height: 250,
    resizeMode: "contain",
  },

  dialog: {
    alignItems: "center",
    position: "relative",
  },

  dialogTitle: {
    textAlign: "center",
  },

  wrapper: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    width: "50%",
    alignItems: "center",
  },

  btn: {
    position: "absolute",
    bottom: 5,
    right: 5,
  },

  text: {
    textAlign: "center",
  },
  loaderWrapper:{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  }
});

type TProps = {
  item:IItem
}

const PhotoItem = ({ item } : TProps ) => {
  const [visibleDialog, setVisibleDialog] = useState(false);
  const toggleDialog = () => {
    setVisibleDialog(!visibleDialog);
  };

  const favourites = useAppSelector((state) => state.favourite)

  const dispatch = useAppDispatch()

  const [isLoading, setIsLoading] = useState(false);

  const handleAddToFavourites = () => {
    dispatch(addToFavourite(item));
  };

  const handleDeleteFromFavourites = () => {
    dispatch(deleteFromFavourite(item.id));
  };

  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.relative}>
          <TouchableOpacity onPress={toggleDialog}>
            <Image
              style={styles.thumbnail}
              source={{ uri: item.thumbnailUrl }}
            />
          </TouchableOpacity>
          {!favourites.find((elem) => elem.id == item.id) ? (
            <AntDesign
              style={styles.btn}
              name="hearto"
              size={32}
              color="red"
              onPress={handleAddToFavourites}
            />
          ) : (
            <AntDesign
              style={styles.btn}
              name="heart"
              size={32}
              color="red"
              onPress={handleDeleteFromFavourites}
            />
          )}
        </View>

        <Text style={styles.text}>{item.title}</Text>
      </View>
      <Dialog
        style={styles.dialog}
        isVisible={visibleDialog}
        onBackdropPress={toggleDialog}
      >
        <Dialog.Title title={item.title} titleStyle={{ textAlign: "center" }} />
        <View style={styles.relative}>
          <Image
            style={styles.img}
            source={{ uri: item.url }}
            alt={item.title}
            onLoadStart={() => setIsLoading(true)}
            onLoadEnd={() => setIsLoading(false)}
          />
          {isLoading && <View style={[styles.loaderWrapper, styles.img]}><Loader /></View>}
        </View>
      </Dialog>
    </>
  );
};

export default PhotoItem;
