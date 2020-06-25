import React, { useState, useCallback } from 'react';
import { LayoutChangeEvent } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { EmotionActions } from 'store/ducks/emotion';
import { EmojiIcon, EmojiName, Circle } from './styles';

interface Props {
  item: EmotionProps;
}

const Item: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [size, setSize] = useState(0);

  const handleOnLayout = useCallback(
    (event: LayoutChangeEvent): void => {
      const { nativeEvent } = event;
      setLoading(false);
      if (loading) {
        const rest = nativeEvent.layout.width * 1.5;

        if (rest > 70) setSize(rest);
      }
    },
    [loading],
  );

  const navigation = useNavigation();
  function handleOnPress(): void {
    dispatch(EmotionActions.selectEmotion(item));
    navigation.navigate('Home');
  }
  return (
    <Circle size={size} onPress={handleOnPress}>
      <EmojiIcon>{item.emoji}</EmojiIcon>
      <EmojiName allowFontScaling onLayout={handleOnLayout}>
        {item.name}
      </EmojiName>
    </Circle>
  );
};

export default React.memo(Item);
