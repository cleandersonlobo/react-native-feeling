import styled from 'styled-components/native';
import { colors, Text, dimensions } from 'styles';

const { fullWidth } = dimensions;
export const CIRCLE_WIDTH = fullWidth / 4.5;
export const EmojiIcon = styled(Text)`
  font-size: 20px;
`;

export const EmojiName = styled(Text)`
  font-weight: bold;
  color: white;
  text-align: center;
  line-height: 20px;
`;

interface CircleProps {
  size?: number;
}

export const Circle = styled.TouchableOpacity`
  padding: 5px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.PRIMARY_COLOR_LIGHT};
  ${props => props.size && `width:${props.size}px`};
  ${props => props.size && `height: ${props.size}px`};
  min-width: 70px;
  min-height: 70px;
  border-radius: ${(props: CircleProps) => props.size || CIRCLE_WIDTH}px;
  margin: 3px;
`;

export const Title = styled(Text)`
  font-weight: bold;
  color: white;
  text-align: center;
  font-size: 40px;
`;

export const SubTitle = styled(Text)`
  margin: 20px 0px;
  font-weight: bold;
  color: white;
  text-align: center;
`;
