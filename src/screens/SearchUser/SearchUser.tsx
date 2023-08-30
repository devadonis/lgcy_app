import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../navigation";
import AppHeader from "../../UI/AppHeader/AppHeader";
import { GALLERIES } from "../../data/galeryData";
import { SEARCH } from "../../assets/icons";

const { width } = Dimensions.get("screen");

type Props = NativeStackScreenProps<AppStackParamList>;

const SearchUser = ({ navigation }: Props) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        {/* <AppHeader title="SearchUser" /> */}
        <AppHeader
            centerIcon={<SEARCH width={15} height={15} style={{marginLeft: 5}} />}
            centerTitle="Search"
            onCenterIconPress={() =>
                navigation.navigate("SearchUserFromHome")
            //   navigation.navigate("TabStack", { screen: "Search" })
            }
          />
      </View>
      <View style={styles.container}>
        <FlatList
          data={GALLERIES}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          renderItem={({ index, item }) => {
            return (
              <View style={{ marginRight: 2, marginBottom: 2 }}>
                <Image
                  source={item.uri as ImageSourcePropType}
                  style={{ width: width * 0.335, height: width * 0.335 }}
                />
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerContainer: {
    paddingLeft: 10,
    paddingRight: 30,
    paddingBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 20,
  },
});

export default SearchUser;
