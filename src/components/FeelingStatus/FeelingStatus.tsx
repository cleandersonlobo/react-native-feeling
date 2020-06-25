import * as React from 'react';
import { View } from 'react-native';
import { colors } from 'styles';
import { useSelector, shallowEqual } from 'react-redux';
import { TextStatus, Emoji, SubTitle } from './styles';

const FeelingStatus: React.FC = () => {
  const { emotion, feeling } = useSelector(
    (state: StoreState) => ({ ...state.emotion, ...state.feeling }),
    shallowEqual,
  );
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Emoji>{emotion?.emoji}</Emoji>
      <TextStatus>I'm feeling</TextStatus>
      <TextStatus color={colors.PRIMARY_COLOR}>
        {feeling.description} {emotion?.name}
      </TextStatus>
      <SubTitle>Choose the intensity of your feeling</SubTitle>
    </View>
  );
};

export default React.memo(FeelingStatus);
