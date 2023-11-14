import React, { forwardRef, useMemo, useCallback } from "react";
import { View, Text, StyleSheet } from "react-native";
import { BottomSheetModal, BottomSheetBackdrop } from "@gorhom/bottom-sheet";
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
  return (
    <BottomSheetModal
      snapPoints={snapPoints}
      ref={reference}
      backdropComponent={renderBackDrop}
    >
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Your location</Text>
          <View style={styles.section}>
            <Ionicons name="location-outline" color={Colors.medium} size={25} />
            <Text style={styles.subtitle}>London</Text>
            <Ionicons
              name="chevron-forward-outline"
              color={Colors.primary}
              size={31}
            ></Ionicons>
          </View>
        </View>
        <View>
          <Text></Text>
          <View>
            <Ionicons></Ionicons>
            <Text></Text>
            <Ionicons></Ionicons>
          </View>
        </View>
      </View>
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
});
export default ButtomSheet;
