import { Container, StyledInput, Title } from "./style";

export function RegisterChildren({ title }) {
  return (
    <Container>
      <Title>{title}</Title>

      <StyledInput
        placeholder="Insira o nome *"
      />

      <StyledInput
        placeholder="Insira o sobrenome *"
      />

      <StyledInput
        placeholder="Data de nascimento *"
      />

      <StyledInput
        placeholder="CPF *"
      />

      <StyledInput
        placeholder="Passaporte (Viagem Internacional) *"
      />
    </Container>
  )
}