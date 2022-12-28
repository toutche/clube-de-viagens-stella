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

export const ContainerInputIcon = styled.View`
  flex-direction: row;

  border: 1px solid rgba(161, 161, 161, 1);
  border-radius: 50px;

  align-items: center;
  justify-content: center;

  margin-top: 20px;

  height: 50px;
  `

export const StyledInput = styled.TextInput`

  padding: 10px;

  font-size: 15px;
  font-family: Montserrat;

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