import React from 'react';
import { Touchable, TouchableText } from './styles';

export interface Props {
  onPress(): void;
  text?: string;
}
const Button: React.FC<Props> = ({ text = 'NEXT', ...props }) => {
  return (
    <Touchable {...props}>
      <TouchableText>{text}</TouchableText>
    </Touchable>
  );
};

export default Button;
