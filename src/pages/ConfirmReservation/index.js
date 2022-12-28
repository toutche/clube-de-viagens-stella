import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { logScreen } from "../../services/firebase";
import { ScreenView } from "../../services/firebase/constant";

const ConfirmReservation = () => {
  useEffect(() => {
    logScreen(ScreenView.ConfirmReservation);
  }, []);

  return (
    <View>
      <Text>oi</Text>
    </View>
  );
};

export default ConfirmReservation;
