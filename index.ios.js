// Import a library to help create a Component
import React from 'react';
import { Text, AppRegistry } from 'react-native';
// create a Component
const App = () => (
  <Text>Alo porra!</Text>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
