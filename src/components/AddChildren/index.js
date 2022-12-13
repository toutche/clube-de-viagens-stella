import { Container, Title } from "./style";

import { AntDesign } from '@expo/vector-icons';

import { BLUE_COLOR } from "../../utils/variables";

export function AddChildren({ numberOfChildren, setNumberOfChildren }) {

  return (
    <Container
      onPress={() => {
        (setNumberOfChildren(!numberOfChildren))
      }} >
      {
        numberOfChildren
          ? <AntDesign name="pluscircle" size={24} color={BLUE_COLOR} />
          : <AntDesign name="minuscircle" size={24} color={BLUE_COLOR} />
      }

      <Title>Adicionar</Title>
    </Container>
  )
}