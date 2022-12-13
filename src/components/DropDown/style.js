import styled from "styled-components/native";

import DropDownPicker from "react-native-dropdown-picker";

export const Container = styled.View`
  z-index: 100;
  flex-direction: row;
  align-items: center;

  color: white;
  /* background-color: black; */

  margin-top: 15px;

  width: 100%;

  border: 1px solid rgba(255, 255, 255, 0.75);

  border-radius: 30px;
`

export const DropDownContainer = styled(DropDownPicker)`
  border-radius: 30px;

  color: white;

  width: 80%;

  border: 1px solid #E10717;
  background-color: #E10717;
`

export const IconContainer = styled.View`
  padding-left: 15px;
`