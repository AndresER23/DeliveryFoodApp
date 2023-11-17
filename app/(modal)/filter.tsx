import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ListRenderItem,
} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import objProperties from "@/constants/objProperties";
import categories from "@/assets/data/categories.json";
import { useNavigation } from "expo-router";
import { FlatList } from "react-native-gesture-handler";

interface Category {
  name: string;
  amount: number;
  checked?: boolean;
}

const Filter = () => {
  const navigation = useNavigation();
  console.log(categories);

  const renderItem: ListRenderItem<Category> = ({ item }) => {
    return (
      <View>
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text>Filter</Text>
      <FlatList data={categories} renderItem={renderItem} />
      <View style={styles.footer}>
        <TouchableOpacity
          style={objProperties.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: Colors.ligthGrey,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
    elevation: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: -10,
    },
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "800",
    fontSize: 18,
  },
});

export default Filter;
