import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;

  margin-top: 10px;
`

export const Title = styled.Text`
  align-self: center;

  font-size: 16px;
  font-weight: bold;
`

export const StyledInput = styled.TextInput`
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 50px;

  margin-top: 20px;
  padding: 10px;

  font-size: 16px;

  width: 100%;
`

export const ErrorLine = styled.Text`
  color: red;

  font-weight: bold;

  margin-left: 10px;
  margin-top: 5px;
`

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  background-color: green;
  border-radius: 50px;

  margin-top: 20px;

  width: 100%;
  height: 50px;
`

export const ButtonTitle = styled.Text`
  color: white;
  align-self: center;

  font-size: 16px;
  font-weight: bold;
`
