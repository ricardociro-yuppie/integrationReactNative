import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Text } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
  return (
    <>
      <Text style={{ textAlign: 'center' }} >WebView Facesign</Text>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <WebView
          source={{ uri: 'https://dev-app.facesign.in' }}
          style={styles.webview}
          mediaCapturePermissionGrantType="grantIfSameHostElsePrompt"
          mediaPlaybackRequiresUserAction={false}
          javaScriptEnabled
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  webview: {
    flex: 1,
  },
});

export default App;
