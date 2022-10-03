import React, { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import BottomSheet from "../../components/BottomSheet";
import Menu from "../../components/Menu";
import { useFilter } from "../../contexts/filter";
import AutoComplete from "./AutoComplete";
import BodyDashboard from "./BodyDashboard";
import HeaderDashboard from "./HeaderDashboard";

const Dashboard = ({ navigation }) => {
  const filterId = useRef()
  const [option, setOption] = useState(0);
  const { isVisibleMenu, setVisibleMenu } = useFilter()
  // const [isVisibleMenu, setVisibleMenu] = useState(false);
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
