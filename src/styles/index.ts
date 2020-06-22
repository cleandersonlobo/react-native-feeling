import { StyleSheet } from 'react-native';
import colors from './colors';
import base from './base';

export { colors, base };
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeHeader: { flex: 0, backgroundColor: colors.WHITE },
  safeArea: { flex: 1, backgroundColor: colors.PRIMARY_COLOR },
});
export default styles;
