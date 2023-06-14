import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import ContactUsScreen from './src/screens/ContactUsScreen';
import App from './App';

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <ContactUsScreen />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
