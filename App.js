/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  View,
  Text,
  StatusBar,
  Alert
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.button}>
          <Button onPress={() => Alert.alert("garka")} title={"Press me GARKA"}/>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center"
  },
  container: {
    flex: 1,
    justifyContent: "center"
  }
});

export default App;
