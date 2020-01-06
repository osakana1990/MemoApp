import React from 'react';
import { StyleSheet, View } from 'react-native';

import Appbar from './src/components/Appbar';
// import MemoDetailScreen from './src/screens/MemoDetailScreen';
// import MemoListScreen from './src/screens/MemoListScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Appbar />
      {/* <MemoListScreen /> */}
      {/* <MemoDetailScreen /> */}
      <MemoEditScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78,
  },
});
