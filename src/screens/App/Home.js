import { SafeAreaView, Text, FlatList } from "react-native";
import Hive from "../../components/Hive";
import tw from "twrnc";
import { data } from "../../../faker/MOCK_DATA";
import Icon from "react-native-vector-icons/Entypo";
import { View } from "react-native";

export default function () {
  return (
    <SafeAreaView style={tw`px-3 pt-3 h-full relative`}>
      <Text style={tw` text-lg mb-2  font-medium text-gray-700`}>
        Mes Ruches :
      </Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.number}
        renderItem={({ item }) => (
          <Hive
            name={item.name}
            number={item.number}
            temperature={item.temperature}
          />
        )}
      />

      <View
        style={tw` flex w-14 border border-white h-14 justify-center items-center bottom-5 right-5 bg-sky-900 rounded-full absolute`}
      >
        <Icon
          name="plus"
          style={tw`text-xl text-center font-extralight text-white`}
        />
      </View>
    </SafeAreaView>
  );
}
