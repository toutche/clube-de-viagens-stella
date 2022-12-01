import { useState } from "react";
import { Button, ButtonTitle, Container, StyledInput, Title } from "./style";

export function RegisterChildren({ title, children, setChildren }) {

  const [obj, setObj] = useState({
    name: '',
    last_name: '',
    birth_date: '',
    cpf: '',
    passport: '',
  });

  // console.log(obj);

  function handleChildren() {
    setChildren([...children, obj])
  }

  return (
    <Container>
      <Title>{title}</Title>

      <StyledInput
        placeholder="Insira o nome *"
        onChangeText={(text) => setObj({ ...obj, name: text })}
      />

      <StyledInput
        placeholder="Insira o sobrenome *"
        onChangeText={(text) => setObj({ ...obj, last_name: text })}
      />

      <StyledInput
        placeholder="Data de nascimento *"
        onChangeText={(text) => setObj({ ...obj, birth_date: text })}
      />

      <StyledInput
        placeholder="CPF *"
        onChangeText={(text) => setObj({ ...obj, cpf: text })}
      />

      <StyledInput
        placeholder="Passaporte (Viagem Internacional) *"
        onChangeText={(text) => setObj({ ...obj, passport: text })}
      />

      <Button onPress={() => handleChildren()}>
        <ButtonTitle>Aplicar</ButtonTitle>
      </Button>
    </Container>
  )
}