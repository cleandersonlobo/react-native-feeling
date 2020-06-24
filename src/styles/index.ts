import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { Text as TextDefault } from 'react-native';
import colors from './colors';
import dimensions from './dimensions';

export { colors, dimensions };

export const Text = styled(TextDefault)`
  font-family: 'Palanquin';
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeHeader: { flex: 0, backgroundColor: colors.WHITE },
  safeArea: { flex: 1, backgroundColor: colors.PRIMARY_COLOR },
  headerTitleStyle: {
    fontFamily: 'Palanquin',
    color: colors.WHITE,
    fontWeight: 'bold',
    fontSize: 18,
  },
  headerStyles: {
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  headerLeftContainerStyle: {
    paddingLeft: 15,
  },
});

export default styles;
