import React from 'react';
import { View } from 'react-native';

import { Placeholder, PlaceholderLine, Fade } from 'rn-placeholder';

const StatusLoading: React.FC = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: '#ffffff',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Placeholder Animation={Fade}>
      <PlaceholderLine
        style={{ alignSelf: 'center', marginBottom: 15 }}
        width={10}
        height={35}
      />
      <PlaceholderLine
        style={{ alignSelf: 'center', marginBottom: 10 }}
        width={45}
        height={30}
      />
      <PlaceholderLine
        style={{ alignSelf: 'center', marginBottom: 20 }}
        width={60}
        height={30}
      />
      <PlaceholderLine
        style={{ alignSelf: 'center', marginBottom: 0 }}
        width={60}
        height={14}
      />
    </Placeholder>
  </View>
);

export default StatusLoading;
