import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, Button, Alert, TextInput } from 'react-native';

export default function App() {
    const [text, setText] = useState('');

    const buttonPressed = () => {
      Alert.alert('Hello','button Pressed');
    }

  return (
    <View style={styles.container}>
      <TextInput
        style={{ width:200, borderColor:'red', borderWidth: 2,backgroundColor: 'white'
        }}
        onChangeText={text => setText}
        />
      <Button title="Press me" onPress={buttonPressed}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  warningText: {
    fontSize:20
  }
});