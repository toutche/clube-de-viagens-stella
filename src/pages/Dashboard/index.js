import React, { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import BottomSheet from "../../components/BottomSheet";
import Menu from "../../components/Menu";
import ShareModal from "../../components/ShareModal";
import AutoComplete from "./AutoComplete";
import BodyDashboard from "./BodyDashboard";
import HeaderDashboard from "./HeaderDashboard";

const Dashboard = ({ navigation }) => {
  const filterId = useRef()
  const [option, setOption] = useState(0);

  const [isVisibleMenu, setVisibleMenu] = useState(false);
  const [isVisibleShare, setVisibleShare] = useState(false);
  const [isVisibleAutoComplete, setVisibleAutoComplete] = useState(false)
  const [isVisibleBottomSheet, setVisibleBottomSheet] = useState(false)

  const openAutoComplete = () => setVisibleAutoComplete(state => !state)

  const openBottomSheet = () => setVisibleBottomSheet(state => !state)

  return (
    <View style={styles.container}>
      <Menu
        onClose={() => setVisibleMenu(!isVisibleMenu)}
        isVisible={isVisibleMenu}
      />
      <ShareModal
        onClose={() => setVisibleShare(!isVisibleShare)}
        isVisible={isVisibleShare}
      />
      <AutoComplete
        isVisible={isVisibleAutoComplete}
        onClose={() => setVisibleAutoComplete(state => !state)}
        id={filterId.current}
      />
      <BottomSheet
        isVisible={isVisibleBottomSheet}
        onClose={() => setVisibleBottomSheet(state => !state)}
        id={filterId.current}
      />
      <HeaderDashboard
        menuOpen={() => setVisibleMenu(!isVisibleMenu)}
        option={option}
        setOption={value => setOption(value)}
        navigation={navigation}
      />
      <BodyDashboard
        {...{
          shareOpen: () => setVisibleShare(state => !state),
          navigation,
          display: option,
          openAutoComplete,
          openBottomSheet,
          filterId
        }}
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
