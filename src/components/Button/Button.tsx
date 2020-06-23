import React from 'react';
import { Touchable, TouchableText } from './styles';

export interface Props {
  onPress(): void;
}
const Button: React.FC<Props> = props => {
  return (
    <Touchable {...props}>
      <TouchableText>NEXT</TouchableText>
    </Touchable>
  );
};

export default Button;
