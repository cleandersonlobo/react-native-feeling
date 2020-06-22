import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StatusBar } from 'react-native';
import styles from './styles';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeHeader} />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          bounces={false}
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={styles.container}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: '#ffffff',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text>I'm Felling</Text>
            <Text>Slightly Okay</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: '#7653E2' }}>
            <Text>Slightly Okay</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
