declare module '*.svg' {
  import { SvgProps } from 'react-native-svg';

  const content: React.FC<SvgProps>;
  export default content;
}

interface LabelOptions {
  [key: string]: number | string;
  level: number;
  feeling: string;
}
