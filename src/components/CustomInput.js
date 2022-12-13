import { View, Text, TextInput } from "react-native";
import {useState} from 'react'
import tw from "twrnc";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function ({
  label,
  iconName,
  errorMessage,
  password,
  onFocus = () => {},
  ...props
}) {
    const [isFocused , setIsFocused] = useState(false)
    const [hidepassword , setHidePassword] = useState(true)
  return (
    <View style={tw`mb-5 `}>
      <Text style={tw` my-1 text-base text-gray-400 font-bold`}>{label}</Text>
      <View
        style={tw`h-14 bg-slate-300 flex flex-row items-center px-3 border border-gray-200 ${isFocused ? 'border-gray-500' : ''} rounded`}
      >
        <Icon style={tw` text-2xl text-yellow-500 mr-3`} name={iconName} />
        <TextInput
        secureTextEntry={hidepassword}
          style={tw` text-base flex-1`}
          placeholderTextColor='rgb(150 ,160 ,170)'
          selectionColor='rgb(160 ,170 ,180)'
          {...props}
          autoCorrect={false}
          onFocus={() => {
            onFocus()
            setIsFocused(true)
          }}
          onBlur={() => setIsFocused(false)}
        />
        {
            password && <Icon onPress={() => setHidePassword(!hidepassword)} name={hidepassword ? "eye-outline" : 'eye-off-outline'} style={tw`text-2xl text-gray-400`}/>
        }
      </View>
    </View>
  );
}
