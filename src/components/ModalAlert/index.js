import { Button, ModalContainer, Logo, Title, ExternalContainerWrapper, InternalContainerWrapper, TextModal, TextButton } from "./style";
import LogoMarca from '../../../assets/Marca_Clube-de-Ferias-Vermelho.png';

export function ModalAlert(props) {
  const {
    modalVisible,
    setModalVisible,
    animationType = 'fade',
    transparent = true,
    visible,
    onRequestClose,
    statusBarTranslucent = true,
    title,
    text,
    textFirstButton = 'Cancelar',
    textSecondButton,
    secondButton,
    secondButtonFunction,
    } = props;

  return (
    <ModalContainer
      animationType={animationType}
      transparent={transparent}
      visible={visible}
      onRequestClose={onRequestClose}
      statusBarTranslucent={statusBarTranslucent}
    >
      <ExternalContainerWrapper>
        <InternalContainerWrapper>
          <Logo
            source={LogoMarca}
            alt='Logo do clube de férias'
          />

          <Title>{title}</Title>
          <TextModal>{text}</TextModal>
          
          <Button onPress={() => setModalVisible(!modalVisible)}>
            <TextButton>
              {textFirstButton}
            </TextButton>
          </Button>
          {
            secondButton
            && <Button secondButton={secondButton} onPress={secondButtonFunction}>
            <TextButton secondButton={secondButton}>
              {textSecondButton}
            </TextButton>
          </Button>
          }
        </InternalContainerWrapper>
      </ExternalContainerWrapper>
    
    </ModalContainer>
  )
}
