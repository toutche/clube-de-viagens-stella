import { useForm, Controller } from 'react-hook-form'

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button, ButtonTitle, Container, StyledInput, Title, ErrorLine, ContainerInputIcon } from "./style";

import { maskDate } from "../../utils/masks";
import { Alert } from 'react-native';

import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { useState } from 'react';

const schema = yup.object({
  name: yup.string().required('Necessário preencher o nome.').min(3, 'Deve ter pelo menos 3 caracteres.'),
  last_name: yup.string().required('Necessário preencher o sobrenome.').min(3, 'Deve ter pelo menos 3 caracteres.'),
  birth_date: yup.string().required('Necessário preencher a data de nascimento.'),
  cpf: yup.string().required('Necessário preencher o cpf.').min(11, 'Deve ter 11 números o seu cpf.').max(11, 'Deve ter 11 números o seu cpf.'),
}).required();

export function RegisterChildren({ title, children, setChildren }) {
  const [validDate, setValidDate] = useState(false);

  const { control, handleSubmit, formState: { errors } } = useForm({ mode: 'onBlur', resolver: yupResolver(schema) })

  function onSubmit(data) {
    let from = data.birth_date.split("/");
    let birthdateTimeStamp = new Date(from[2], from[1] - 1, from[0]);
    let cur = new Date();
    let diff = cur - birthdateTimeStamp;
    let currentAge = Math.floor(diff / 31557600000);

    if (currentAge > 12) {
      setValidDate(true);
    } else {
      if (!children.some((element) => element.cpf === data.cpf)) {
        setValidDate(false);
        setChildren((prev) => [...prev, data]);
        Alert.alert(
          "Criança cadastrada com sucesso!",
          "",
          [
            {
              text: "Cancelar",
              style: 'cancel'
            }
          ]
        )
      } else {
        Alert.alert(
          "Opa, essa criança já foi cadastrada!",
          "Insira outros dados para cadastrar uma nova criança. ",
          [
            {
              text: "Voltar",
              style: "cancel"
            },
          ]
        );
      }
    }
  }

  return (
    <Container>
      <Title>{title}</Title>

      <ContainerInputIcon>
        <FontAwesome style={{ marginLeft: 45 }} name="user-o" size={18} color="rgba(161, 161, 161, 1)" />
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value, onBlur } }) => (
            <StyledInput
              placeholder="Insira o nome *"
              placeholderTextColor='rgba(161, 161, 161, 1)'
              value={value}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
            />
          )}
        />
      </ContainerInputIcon>

      {
        errors.name?.message && <ErrorLine>{errors.name?.message}</ErrorLine>
      }

      <ContainerInputIcon>
        <FontAwesome style={{ marginLeft: 45 }} name="user-o" size={18} color="rgba(161, 161, 161, 1)" />
        <Controller
          control={control}
          name="last_name"
          render={({ field: { onChange, value, onBlur } }) => (
            <StyledInput
              placeholder="Insira o sobrenome *"
              placeholderTextColor='rgba(161, 161, 161, 1)'
              value={value}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
            />
          )}
        />
      </ContainerInputIcon>

      {
        errors.last_name?.message && <ErrorLine>{errors.last_name?.message}</ErrorLine>
      }

      <ContainerInputIcon>
        <FontAwesome style={{ marginLeft: 45 }} name="calendar-o" size={18} color="rgba(161, 161, 161, 1)" />
        <Controller
          control={control}
          name="birth_date"
          render={({ field: { onChange, value, onBlur } }) => (
            <StyledInput
              placeholder="Data de nascimento *"
              placeholderTextColor='rgba(161, 161, 161, 1)'
              value={value}
              onBlur={onBlur}
              onChangeText={value => onChange(maskDate(value))}
              keyboardType={"numeric"}
            />
          )}
        />
      </ContainerInputIcon>

      {
        errors.birth_date?.message && <ErrorLine>{errors.birth_date?.message}</ErrorLine>
      }
      {
        validDate && <ErrorLine>Data Inválida</ErrorLine>
      }

      <ContainerInputIcon>
        <FontAwesome style={{ marginLeft: 45 }} name="id-card-o" size={18} color="rgba(161, 161, 161, 1)" />
        <Controller
          control={control}
          name="cpf"
          render={({ field: { onChange, value, onBlur } }) => (
            <StyledInput
              placeholder="CPF *"
              placeholderTextColor='rgba(161, 161, 161, 1)'
              value={value}
              onBlur={onBlur}
              onChangeText={value => onChange((value))}
              maxLength={11}
              keyboardType={"numeric"}

            />
          )}
        />
      </ContainerInputIcon>

      {
        errors.cpf?.message && <ErrorLine>{errors.cpf?.message}</ErrorLine>
      }

      <ContainerInputIcon>
        <FontAwesome5 style={{ marginLeft: 45 }} name="passport" size={18} color="rgba(161, 161, 161, 1)" />
        <Controller
          control={control}
          name="passport"
          render={({ field: { onChange, value, onBlur } }) => (
            <StyledInput
              placeholder="Passaporte (Viagem Internacional) *"
              placeholderTextColor='rgba(161, 161, 161, 1)'
              value={value}
              onBlur={onBlur}
              onChangeText={value => onChange((value))}
              maxLength={11}
            />
          )}
        />
      </ContainerInputIcon>

      <Button onPress={handleSubmit(onSubmit)}>
        <ButtonTitle>Salvar</ButtonTitle>
      </Button>

    </Container>
  )
}