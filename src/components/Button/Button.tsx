import React from 'react';
import { Touchable, TouchableText } from './styles';

const Button: React.FC = props => {
  return (
    <Touchable {...props}>
      <TouchableText>NEXT</TouchableText>
    </Touchable>
  );
};

export default Button;
