import { css } from 'styled-components';
import styled from 'styled-components/native';
import { PRIMARY_COLOR } from '../../utils/variables';

export const ModalContainer = styled.Modal`
`

export const ExternalContainerWrapper = styled.View`
  background-color: rgba(0, 0, 0, 0.5);

  flex: 1;

  align-items: center;
  justify-content: center;
`

export const InternalContainerWrapper = styled.View`
  background-color: white;

  align-items: center;

  margin: 20px;

  height: auto;
  width: 80%;

  border-radius: 20px;

  padding: 20px 20px;
`

export const Logo = styled.Image`
  width: 200px;
  height: 135px;
`

export const Title = styled.Text`
  text-align: center;
  
  font-weight: 700;
  font-size: 18px;

  line-height: 28px;

  width: 100%;
  height: 28px;
`

export const TextModal = styled.Text`
  text-align: center;
  
  font-weight: 400;
  font-size: 14px;

  line-height: 20px;

  margin: 5px 0 0 0;

  width: 100%;
`

export const Button = styled.TouchableOpacity`
  ${(props) => {
    switch (props.secondButton) {
      case true:
        return css`
          border: 1px solid rgba(145, 145, 145, 0.5);

          box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);

          border-radius: 8px;

          padding: 10px 18px;

          align-items: center;
          justify-content: center;

          margin: 10px 0 0 0;

          width: 100%;
        `;
      default:
        return css`
          background-color: ${PRIMARY_COLOR};

          border: 1px solid ${PRIMARY_COLOR};

          box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);

          border-radius: 8px;

          padding: 10px 18px;

          align-items: center;
          justify-content: center;

          margin: 20px 0 0 0;

          width: 100%;
        `;
    }
  }}
`

export const TextButton = styled.Text`
  ${(props) => {
    switch (props.secondButton) {
      case true:
        return css`
          color: black;

          font-style: normal;
          font-weight: 600;
          font-size: 16px;
        `;
      default:
        return css`
          color: #FFFFFF;

          font-style: normal;
          font-weight: 600;
          font-size: 16px;
        `;
    }
  }} 
`

export const ThirdButton = styled.TouchableOpacity`
  background-color: ${PRIMARY_COLOR};

  border: 1px solid ${PRIMARY_COLOR};

  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);

  border-radius: 8px;

  padding: 10px 18px;

  align-items: center;
  justify-content: center;

  margin: 10px 0 0 0;

  width: 100%;
`
