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
import { Ionicons } from "@expo/vector-icons";

interface Category {
  name: string;
  amount: number;
  checked?: boolean;
}

const Filter = () => {
  const navigation = useNavigation();

  const renderItem: ListRenderItem<Category> = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Text>
          {item.name} <Text style={styles.amount}>({item.amount})</Text>
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.sortContainer}>
        <View style={styles.section}>
          <Ionicons
            name="arrow-down-outline"
            size={20}
            color={Colors.medium}
          ></Ionicons>
          <Text style={styles.subtitle}>Sort</Text>
          <Ionicons
            name="chevron-forward-outline"
            color={Colors.primary}
            size={31}
          />
        </View>

        <View style={styles.section}>
          <Ionicons
            name="nutrition-outline"
            size={20}
            color={Colors.medium}
          ></Ionicons>
          <Text style={styles.subtitle}>Combos</Text>
          <Ionicons
            name="chevron-forward-outline"
            color={Colors.primary}
            size={31}
          />
        </View>

        <View style={styles.section}>
          <Ionicons
            name="pricetag-outline"
            size={20}
            color={Colors.medium}
          ></Ionicons>
          <Text style={styles.subtitle}>Ofertas</Text>
          <Ionicons
            name="chevron-forward-outline"
            color={Colors.primary}
            size={31}
          />
        </View>

        <View style={styles.section}>
          <Ionicons
            name="flame-outline"
            size={20}
            color={Colors.medium}
          ></Ionicons>
          <Text style={styles.subtitle}>Lo más vendido</Text>
          <Ionicons
            name="chevron-forward-outline"
            color={Colors.primary}
            size={31}
          />
        </View>
      </View>

      <View>
        <Text style={styles.title}>Productos</Text>
        <FlatList data={categories} renderItem={renderItem} />
      </View>

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
  sortContainer: {
    marginBottom: 20,
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
  section: {
    padding: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderTopColor: Colors.grey,
    borderBottomColor: Colors.grey,
    gap: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 17,
    fontWeight: "800",
    marginBottom: 20,
  },
  subtitle: {
    flex: 1,
    fontSize: 16,
  },
  itemContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: Colors.grey,
  },
  amount: {
    color: Colors.medium,
  },
});

export default Filter;
