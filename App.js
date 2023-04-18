import React from "react";
import {Text} from 'react-native';
import styles from './styles';
import * as components from './components/index';

const App = () => {
  return (
    <view style={styles.defaultView}>
      <Text style={styles.pinkText}>Hello, World!</Text>
      <components.Buttons.normalButton title='Click me!'/>
    </view>
  )
}

export default App