import { StyleSheet } from 'react-native';
import styled from 'styled-components';
import { Text as TextDefault } from 'react-native';
import colors from './colors';
import base from './base';

export { colors, base };

export const Text = styled(TextDefault)`
  font-family: 'Palanquin';
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeHeader: { flex: 0, backgroundColor: colors.WHITE },
  safeArea: { flex: 1, backgroundColor: colors.PRIMARY_COLOR },
});

export default styles;
