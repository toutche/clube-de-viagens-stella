import { Button, ModalContainer, Logo, Title, ExternalContainerWrapper, InternalContainerWrapper, TextModal, TextButton, ThirdButton } from "./style";
import LogoMarca from '../../../assets/Marca_Clube-de-Ferias-Vermelho.png';

export function ModalAlert(props) {
  const {
    modalVisible,
    setModalVisible,
    animationType = 'fade',
    transparent = true,
    onRequestClose,
    statusBarTranslucent = true,
    title,
    text,
    textFirstButton = 'Cancelar',
    firstButtonFunction,
    textSecondButton,
    secondButton,
    secondButtonFunction,
    thirdButton,
    thirdButtonFunction,
    textThirdButton
    } = props;

  return (
    <ModalContainer
      animationType={animationType}
      transparent={transparent}
      visible={modalVisible}
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
          
          <Button onPress={() => {
            setModalVisible(!modalVisible)
            secondButton && firstButtonFunction()
            }}>
            <TextButton>
              {textFirstButton}
            </TextButton>
          </Button>
          {
            thirdButton
            && <ThirdButton thirdButton={thirdButton} onPress={thirdButtonFunction}>
            <TextButton thirdButton={thirdButton}>
              {textThirdButton}
            </TextButton>
          </ThirdButton>
          }
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
