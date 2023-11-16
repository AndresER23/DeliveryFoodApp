import React, { useRef } from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import ButtomSheet from "./ButtomSheet";

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchSection}>
        <View style={styles.searchField}>
          <Ionicons
            style={styles.searchIcon}
            size={20}
            name="ios-search"
            color={Colors.medium}
          />
          <TextInput
            placeholder="Restaurants, groceries, dishes"
            placeholderTextColor={Colors.medium}
            style={styles.input}
          />
        </View>
        <Link href={"/(modal)/filter"} asChild>
          <TouchableOpacity style={styles.optionButton}>
            <Ionicons name="options-outline" size={20} color={Colors.primary} />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

const CustomHeader = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const openModal = () => {
    bottomSheetRef.current?.present();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ButtomSheet ref={bottomSheetRef} />
      <View style={styles.container}>
        <TouchableOpacity onPress={openModal}>
          <Image
            source={require("../assets/images/delivery.png")}
            style={styles.image}
          />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={openModal}>
            <Text style={styles.title}>Punto de entrega</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.locationName} onPress={openModal}>
            <Text style={styles.subtitle}>Bogotá</Text>
            <Ionicons name="chevron-down" size={20} color={Colors.primary} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-outline" size={20} color={Colors.primary} />
        </TouchableOpacity>
      </View>
      <SearchBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#fff",
    flex: 1,
  },
  container: {
    height: 60,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    gap: 15,
    paddingHorizontal: 20,
  },
  image: {
    width: 50,
    height: 50,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    color: Colors.medium,
  },
  profileButton: {
    backgroundColor: Colors.ligthGrey,
    padding: 10,
    borderRadius: 50,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  locationName: { flexDirection: "row" },

  searchContainer: {
    height: 70,
    backgroundColor: "#fff",
  },
  searchSection: {
    flexDirection: "row",
    paddingHorizontal: 20,
    gap: 10,
    flex: 1,
    alignItems: "center",
  },
  searchField: {
    flex: 1,
    backgroundColor: Colors.ligthGrey,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  optionButton: {
    padding: 10,
    borderRadius: 50,
  },
  input: {
    padding: 10,
    fontSize: 14,
  },
  searchIcon: {
    paddingLeft: 4,
  },
});

export default CustomHeader;
