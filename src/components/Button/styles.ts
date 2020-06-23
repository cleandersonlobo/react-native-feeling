import styled from 'styled-components/native';
import { Text, colors } from 'styles';

export const Touchable = styled.TouchableOpacity`
  max-width: 360px;
  padding: 20px;
  background-color: white;
  align-self: center;
  width: 100%;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

export const TouchableText = styled(Text)`
  color: ${colors.PRIMARY_COLOR_LIGHT};
  font-weight: bold;
  letter-spacing: 0.75px;
`;
