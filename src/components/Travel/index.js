import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FONT_DEFAULT_STYLE } from "../../utils/variables";
import { useAuth } from "../../contexts/auth";

const Travel = ({ display = 0, data }) => {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={{ uri: user.images.checkout.date }}
          style={{ width: 22, height: undefined, aspectRatio: 0.9 }}
        />
        {data?.date && <View style={styles.contentText}>
          <Text style={styles.title}>Data de viagem</Text>
          <Text style={styles.subTitle}>{data?.date}</Text>
        </View>
        }

        {data?.accommodation_date && <View style={styles.contentText}>
          <Text style={styles.title}>Data de hospedagem</Text>
          <Text style={styles.subTitle}>{data?.accommodation_date}</Text>
        </View>}
      </View>

      {display !== 1 && <View style={styles.separator} />}

      {display === 0 && (
        <View style={styles.content}>
          <Image
            source={{ uri: user.images.checkout.hour }}
            style={{ width: 22, height: undefined, aspectRatio: 0.9 }}
          />
          <View style={styles.contentText}>
            <Text style={styles.title}>Horário do Voo</Text>
            <Text style={styles.subTitle}>{data?.hour_voo}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignSelf: "center",
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginTop: 12,
    marginBottom: 10,
    backgroundColor: "white",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderRadius: 10,
  },
  separator: {
    height: 1.5,
    backgroundColor: "#e1e1e1",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  contentText: {
    marginLeft: 15,
  },
  title: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: "#444",
    fontSize: 14,
  },
  subTitle: {
    fontFamily: FONT_DEFAULT_STYLE,
    color: "#287dfd",
    fontSize: 12.5,
    marginTop: -3,
  },
});

export default Travel;
