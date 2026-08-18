import { StatusBar } from 'expo-status-bar';
  import { StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';
import tocansadopai from './assets/meme.jpg'
  export default function App() {
    return (
      <View style= {{display: 'flex', justifyContent: 'center', alignItems: 'center', width: "100%"}}>
        <Text>core</Text>
        <Image style={{ width: 500, height: 500 }} source={tocansadopai}   />
      </View>
    );
  }