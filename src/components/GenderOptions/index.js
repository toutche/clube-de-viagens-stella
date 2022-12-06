import { Container, Gender, Separator, Title } from "./style";

export function GenderOptions({ setShowOptions, showOptions, setUser, user }) {

  return (
    <Container>
      <Gender onPress={() => {
        setUser({
          ...user,
          gender: "M",
        });
        setShowOptions(!showOptions);
      }}>
        <Title>Masculino</Title>
      </Gender>

      <Separator />

      <Gender onPress={() => {
        setUser({
          ...user,
          gender: "F",
        });
        setShowOptions(!showOptions);
      }}>
        <Title>Feminino</Title>
      </Gender>

      <Separator />

      <Gender onPress={() => {
        setUser({
          ...user,
          gender: "None",
        });
        setShowOptions(!showOptions);
      }}>
        <Title>Não me identifico com nenhum dos gêneros</Title>
      </Gender>
    </Container>
  )
}