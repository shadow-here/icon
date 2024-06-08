// App.tsx

import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import CustomIcons from './src/components/CustomIcons';

const App = () => {
  return (
    <View>
      <TouchableOpacity style={styles.icon}>
        <CustomIcons name="cart" size={50} />
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  icon: {
    backgroundColor: 'beige',
  },
});
