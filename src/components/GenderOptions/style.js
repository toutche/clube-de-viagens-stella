import styled from "styled-components/native";

export const Container = styled.View`
  position: absolute;

  background-color: white;

  width: 85%;

  left: 25px;
  top: 50px;
`

export const Gender = styled.TouchableOpacity`
  justify-content: center;
  /* background-color: gray; */

  height: 40px;

  z-index: 500;
`

export const Separator = styled.View`
  height: 1px;
  width: 90%;

  align-self: center;

  background-color: rgba(0, 0, 0, 0.2);
`

export const Title = styled.Text`
  font-size: 16px;

  color: rgba(0, 0, 0, 0.5);

  padding-left: 5px;
`