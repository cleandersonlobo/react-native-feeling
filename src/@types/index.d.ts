declare module '*.svg' {
  import { SvgProps } from 'react-native-svg';

  const content: React.FC<SvgProps>;
  export default content;
}

interface FeelingProps {
  [key: string]: number | string;
  id: number;
  level: number;
  description: string;
}

interface EmotionProps {
  [key: string]: string | number;
  name: string;
  emoji: string;
  polarity: number;
}

interface EmotionAppState {
  emotions?: ReadonlyArray<EmotionProps>;
  emotion: EmotionProps | null;
  readonly loading: boolean;
  readonly error?: boolean;
}

interface EmotionAction extends EmotionAppState {
  type: string;
}

declare enum EmotionTypesOptions {
  SELECT_EMOTION = 'SELECT_EMOTION',
  ADD_EMOTIONS = 'ADD_EMOTIONS',
  LOAD_REQUEST = 'LOAD_REQUEST',
  FAILURE_REQUEST = 'FAILURE_REQUEST',
}

interface FeelingAppState {
  feeling: FeelingProps;
}

interface FeelingAction {
  type: string;
  feeling?: FeelingProps;
}

interface StoreState {
  emotion: EmotionAppState;
  feeling: FeelingAppState;
}
