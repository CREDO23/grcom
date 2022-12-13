import { SafeAreaView  , Text} from "react-native";
import Hive from "../../components/Hive";
import tw from "twrnc";

export default function () {
  return (
    <SafeAreaView style={tw`p-3`}>
        <Text style={tw` text-lg mb-2  font-medium text-gray-700`}>Mes Ruches :</Text>
        {
            new Array(5).map(item => <Hive/>)
        }
      {/* <Hive /> */}
    </SafeAreaView>
  );
}
