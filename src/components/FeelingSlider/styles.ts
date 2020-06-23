import { StyleSheet } from 'react-native';
import { colors, dimensions } from 'styles';
import { LABELS_DATA } from 'helpers';

const { fullWidth } = dimensions;
export const COUNT_LABELS = LABELS_DATA.length;

export const WIDTH_CURSOR = fullWidth / COUNT_LABELS;
export const HEIGHT_CURSOR = WIDTH_CURSOR;

const styles = StyleSheet.create({
  containerMain: { flex: 1, backgroundColor: 'white' },
  container: { flex: 1, backgroundColor: colors.PRIMARY_COLOR },
  labelTop: {
    width: fullWidth,
    paddingHorizontal: HEIGHT_CURSOR / 2,
    paddingVertical: HEIGHT_CURSOR / 4,
    backgroundColor: colors.WHITE,
  },
  contentCursor: {
    height: HEIGHT_CURSOR - 10,
    backgroundColor: colors.PRIMARY_COLOR,
    flexDirection: 'row',
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Palanquin',
  },
});

export default styles;
