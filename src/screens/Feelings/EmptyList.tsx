import React from 'react';
import { View } from 'react-native';
import globalStyles, { dimensions } from 'styles';
import { Button } from 'components';
import { Title, SubTitle } from './styles';

interface Props {
  onPress(): void;
}

const EmptyList: React.FC<Props> = ({ onPress }) => {
  return (
    <View
      style={[
        globalStyles.container,
        {
          position: 'absolute',
          top: dimensions.fullWidth / 2,
        },
      ]}
    >
      <Title>Hello ;)</Title>
      <SubTitle>Welcome to the Feeling app</SubTitle>
      <Button text="GET STARTED" onPress={onPress} />
    </View>
  );
};

export default EmptyList;
