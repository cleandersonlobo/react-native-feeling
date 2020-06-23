import styled from 'styled-components/native';
import { Text, colors } from 'styles';

interface TextStatusProps {
  color?: string;
}
export const TextStatus = styled(Text)`
  font-weight: bold;
  font-size: 35px;
  line-height: 45px;
  color: ${(props: TextStatusProps) => props.color || '#000000'};
`;

export const Emoji = styled.Text`
  font-size: 35px;
  margin-bottom: 20px;
`;

export const SubTitle = styled(Text)`
  font-weight: 300;
  font-size: 14px;
  color: ${colors.LIGHT};
`;
