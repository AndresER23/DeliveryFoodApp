import React, { forwardRef, useMemo, useCallback } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  BottomSheetModal,
  BottomSheetBackdrop,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

export type Ref = BottomSheetModal;

const ButtomSheet = forwardRef<Ref>((props, reference) => {
  const snapPoints = useMemo(() => ["50%"], []);
  const renderBackDrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );
  const { dismiss } = useBottomSheetModal();
  return (
    <BottomSheetModal
      snapPoints={snapPoints}
      ref={reference}
      backdropComponent={renderBackDrop}
    >
      <View style={styles.toggle}>
        <TouchableOpacity style={styles.toggleActive}>
          <Text style={styles.activeText}>Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.toggleInactive}>
          <Text style={styles.inactiveText}>Pickup</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Tu ubicación</Text>
          <View style={styles.section}>
            <Ionicons name="location-outline" color={Colors.medium} size={25} />
            <Text style={styles.subtitle}>Bogotá</Text>
            <Ionicons
              name="chevron-forward-outline"
              color={Colors.primary}
              size={31}
            ></Ionicons>
          </View>
        </View>
        <View>
          <Text style={styles.title}> Tiempo de entrega</Text>
          <View style={styles.section}>
            <Ionicons name="time-outline" color={Colors.medium} size={25} />
            <Text style={styles.subtitle}>Ahora</Text>
            <Ionicons
              name="chevron-forward-outline"
              color={Colors.primary}
              size={31}
            />
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => dismiss()}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  container: {},
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: Colors.grey,
    borderBottomColor: Colors.grey,

    gap: 10,
  },
  title: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    fontWeight: "bold",
    fontSize: 18,
  },
  subtitle: {
    flex: 1,
    color: Colors.medium,
    fontSize: 16,
  },
  button: {
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 30,
    borderRadius: 4,
    backgroundColor: Colors.primary,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  toggle: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    paddingVertical: 18,
    alignItems: "center",
  },
  toggleActive: {
    backgroundColor: Colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  toggleInactive: {
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  activeText: {
    color: "#fff",
    fontWeight: "700",
  },
  inactiveText: {
    color: Colors.primary,
    fontWeight: "700",
  },
});
export default ButtomSheet;
