import { useState } from "react";
import { Alert } from "react-native";
import { maskDate } from "../../utils/masks";
import { Button, ButtonTitle, Container, StyledInput, Title } from "./style";

export function RegisterChildren({ title, children, setChildren }) {

  const [obj, setObj] = useState({
    name: '',
    last_name: '',
    birth_date: '',
    cpf: '',
    passport: '',
  });

  function handleChildren() {
    console.log(children);
    if (!children.some((element) => element.cpf === obj.cpf)) {
      setChildren([...children, obj])
    } else {
      Alert.alert(
        "Criança já cadastrada",
        "Altere os dados para cadastrar corretamente.",
        [
          {
            text: "Cancel",
            style: "cancel"
          },
        ]
      );
    }
  }

  return (
    <Container>
      <Title>{title}</Title>

      <StyledInput
        placeholder="Insira o nome *"
        onChangeText={(text) => setObj({ ...obj, name: text })}
        value={obj.name}
        minlength={3}
      />

      <StyledInput
        placeholder="Insira o sobrenome *"
        onChangeText={(text) => setObj({ ...obj, last_name: text })}
        value={obj.last_name}
        minlength={3}
      />

      <StyledInput
        placeholder="Data de nascimento *"
        onChangeText={(text) => setObj({ ...obj, birth_date: maskDate(text) })}
        value={obj.birth_date}
        keyboardType={"numeric"}
      />

      <StyledInput
        placeholder="CPF *"
        onChangeText={(text) => setObj({ ...obj, cpf: text })}
        value={obj.cpf}
        maxLength={11}
      />

      <StyledInput
        placeholder="Passaporte (Viagem Internacional) *"
        onChangeText={(text) => setObj({ ...obj, passport: text })}
        value={obj.passport}
      />

      <Button onPress={() => handleChildren()}>
        <ButtonTitle>Aplicar</ButtonTitle>
      </Button>
    </Container>
  )
}