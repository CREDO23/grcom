import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc'

export default function App() {
  return (
    <View style={tw`flex items-center bg-slate-500 justify-center h-full`}>
      <Text style={tw`text-white`}>Hellow les gars!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

