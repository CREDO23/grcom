import Icon from "react-native-vector-icons/EvilIcons";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";
import tw from "twrnc";
import {Text  , FlatList, View} from 'react-native'

export default function ({name , number , temperature}) {
  return (
    <View style={tw` h-28 rounded-xl bg-white flex m-1 flex-row`}>
      <View style={tw`w-8/12 h-full p-2 flex items-start justify-around `}>
        <Text style={tw` text-base font-light text-sky-900`}>Nom : <Text style={tw` font-semibold`}>{name}</Text></Text>
        <Text style={tw` text-base font-light text-sky-900`}>Numero : <Text style={tw` font-semibold`}>{number}</Text></Text>
        <Text style={tw` text-base font-light text-sky-900`}>Température: <Text style={tw` font-semibold`}>{temperature}{' '}C</Text></Text>
      </View>
      <View style={tw`w-4/12 h-full items-end flex justify-around `}>
        <AwesomeIcon
          name="ellipsis-v"
          style={tw` text-lg mx-4 text-gray-500`}
        />
        <Icon
          name="location"
          style={tw`text-4xl font-extralight text-yellow-400`}
        />
      </View>
    </View>
  );
}
