import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Menu from "../../components/Menu";
import ShareModal from "../../components/ShareModal";
import BodyDashboard from "./BodyDashboard";
import HeaderDashboard from "./HeaderDashboard";

const Dashboard = ({ navigation }) => {
  const [option, setOption] = useState(0);
  const [isVisibleMenu, setVisibleMenu] = useState(false);
  const [isVisibleShare, setVisibleShare] = useState(false);

  return (
    <View style={styles.container}>
      <Menu onClose={() => setVisibleMenu(!isVisibleMenu)} isVisible={isVisibleMenu} />
      <ShareModal onClose={() => setVisibleShare(!isVisibleShare)} isVisible={isVisibleShare} />
      <HeaderDashboard
        menuOpen={() => setVisibleMenu(!isVisibleMenu)}
        option={option}
        setOption={value => setOption(value)}
        navigation={navigation}
      />
      <BodyDashboard
        shareOpen={() => setVisibleShare(!isVisibleShare)}
        navigation={navigation}
        display={option}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Dashboard;
