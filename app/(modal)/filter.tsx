import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ListRenderItem,
} from "react-native";
import React, { useState } from "react";
import Colors from "@/constants/Colors";
import objProperties from "@/constants/objProperties";
import categories from "@/assets/data/categories.json";
import { useNavigation } from "expo-router";
import { FlatList } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import BouncyCheckbox from "react-native-bouncy-checkbox";

interface Category {
  key: number;
  name: string;
  amount: number;
  checked?: boolean;
}

const Filter = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState<Category[]>(categories);

  const handleClear = () => {
    const updatedItems = items.map((el) => {
      el.checked = false;
      return el;
    });
    setItems(updatedItems);
  };

  const renderItem: ListRenderItem<Category> = ({ item, index }) => {
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity style={styles.infoCategory}>
          <Text>
            {item.name} <Text style={styles.amount}>({item.amount})</Text>
          </Text>
        </TouchableOpacity>
        <BouncyCheckbox
          disableBuiltInState
          fillColor={Colors.primary}
          unfillColor="#fff"
          innerIconStyle={{ borderColor: Colors.primary, borderRadius: 4 }}
          iconStyle={{ borderColor: Colors.primary, borderRadius: 4 }}
          isChecked={items[index].checked}
          onPress={() => {
            const isChecked = items[index].checked;

            const updatedItems = items.map((item) => {
              if (item.key == items[index].key) {
                item.checked = !isChecked;
              }
              return item;
            });

            setItems(updatedItems);
          }}
          style={{
            borderBottomWidth: 1,
            borderColor: Colors.grey,
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.sortContainer}>
        <TouchableOpacity style={styles.section}>
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
        </TouchableOpacity>

        <TouchableOpacity style={styles.section}>
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
        </TouchableOpacity>

        <TouchableOpacity style={styles.section}>
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
        </TouchableOpacity>

        <TouchableOpacity style={styles.section}>
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
        </TouchableOpacity>
      </View>

      <View style={{ height: "53%", paddingHorizontal: 25 }}>
        <View style={styles.categoriesHeader}>
          <Text style={styles.title}>Productos</Text>
          <TouchableOpacity onPress={() => handleClear()}>
            <Text style={styles.clearAll}>Limpiar todo</Text>
          </TouchableOpacity>
        </View>
        <FlatList data={items} renderItem={renderItem} scrollEnabled={true} />
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
    backgroundColor: Colors.ligthGrey,
  },
  sortContainer: {
    marginBottom: 20,
  },
  categoriesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  clearAll: {
    color: Colors.medium,
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
    paddingHorizontal: 25,
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
    justifyContent: "space-between",
  },
  infoCategory: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: Colors.grey,
  },
  amount: {
    color: Colors.medium,
  },
});

export default Filter;
