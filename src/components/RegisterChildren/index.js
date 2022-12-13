import { useForm, Controller } from 'react-hook-form'

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button, ButtonTitle, Container, StyledInput, Title, ErrorLine } from "./style";

import { maskDate } from "../../utils/masks";
import { Alert } from 'react-native';

const schema = yup.object({
  name: yup.string().required('Necessário preencher o nome.').min(3, 'Deve ter pelo menos 3 caracteres.'),
  last_name: yup.string().required('Necessário preencher o sobrenome.').min(3, 'Deve ter pelo menos 3 caracteres.'),
  birth_date: yup.string().required('Necessário preencher a data de nascimento.'),
  cpf: yup.string().required('Necessário preencher o cpf.').min(11, 'Deve ter 11 números o seu cpf.').max(11, 'Deve ter 11 números o seu cpf.'),
}).required();

export function RegisterChildren({ title, children, setChildren }) {
  const { control, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'onBlur', resolver: yupResolver(schema) })

  function onSubmit(data) {
    if (!children.some((element) => element.cpf === data.cpf)) {
      setChildren((prev) => [...prev, data]);
    } else {
      Alert.alert(
        "Criança ja cadastrada.",
        "Mude os dados para cadastrar uma criança.",
        [
          {
            text: "Voltar",
            style: "cancel"
          },
        ]
      );
    }

  }

  return (
    <Container>
      <Title>{title}</Title>

      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value, onBlur } }) => (
          <StyledInput
            placeholder="Insira o nome *"
            placeholderTextColor='rgba(0, 0, 0, 0.7)'
            value={value}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
          />
        )}
      />

      {
        errors.name?.message && <ErrorLine>{errors.name?.message}</ErrorLine>
      }

      <Controller
        control={control}
        name="last_name"
        render={({ field: { onChange, value, onBlur } }) => (
          <StyledInput
            placeholder="Insira o sobrenome *"
            placeholderTextColor='rgba(0, 0, 0, 0.65)'
            value={value}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
          />
        )}
      />

      {
        errors.last_name?.message && <ErrorLine>{errors.last_name?.message}</ErrorLine>
      }

      <Controller
        control={control}
        name="birth_date"
        render={({ field: { onChange, value, onBlur } }) => (
          <StyledInput
            placeholder="Data de nascimento *"
            placeholderTextColor='rgba(0, 0, 0, 0.65)'
            value={value}
            onBlur={onBlur}
            onChangeText={value => onChange(maskDate(value))}
            keyboardType={"numeric"}
          />
        )}
      />

      {
        errors.birth_date?.message && <ErrorLine>{errors.birth_date?.message}</ErrorLine>
      }

      <Controller
        control={control}
        name="cpf"
        render={({ field: { onChange, value, onBlur } }) => (
          <StyledInput
            placeholder="CPF *"
            placeholderTextColor='rgba(0, 0, 0, 0.65)'
            value={value}
            onBlur={onBlur}
            onChangeText={value => onChange((value))}
            maxLength={11}
            keyboardType={"numeric"}
          />
        )}
      />

      {
        errors.cpf?.message && <ErrorLine>{errors.cpf?.message}</ErrorLine>
      }

      <Controller
        control={control}
        name="passport"
        render={({ field: { onChange, value, onBlur } }) => (
          <StyledInput
            placeholder="Passaporte (Viagem Internacional) *"
            placeholderTextColor='rgba(0, 0, 0, 0.65)'
            value={value}
            onBlur={onBlur}
            onChangeText={value => onChange((value))}
            maxLength={11}
          />
        )}
      />

      <Button onPress={handleSubmit(onSubmit)}>
        <ButtonTitle>Aplicar</ButtonTitle>
      </Button>

    </Container>
  )
}