import React, { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  StyleSheet
} from 'react-native';


function App(): React.JSX.Element {
  const [backGround, setbackGround] = useState('#ffffff')
  const [backGroundStatusBar, setbackGroundStatusBar] = useState('#000000')
  const generateBackGround = () => {
    let color = '#'
    const hexaCode = '01234567890ABCDEF'
    for (let index = 0; index < 6; index++) {
      color += hexaCode[Math.floor(Math.random() * 16)];
    }
    setbackGroundStatusBar(backGround)
    setbackGround(color)
  }
  return <>
    <StatusBar backgroundColor={backGround}/>
    <View style={[styles.container, {backgroundColor: backGroundStatusBar }]}>
      <TouchableOpacity
        onPress={generateBackGround} 
        >
        <View style={styles.actionBtn}>
          <Text style={styles.changeMeBtnTxt}>Press me</Text>
        </View>
      </TouchableOpacity>
    </View>
  </>
}

const styles = StyleSheet.create({
  changeMeBtnTxt: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#6a1b4d',
    paddingHorizontal: 40,
    paddingVertical: 10

  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
