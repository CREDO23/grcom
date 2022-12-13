import { SafeAreaView, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import tw from "twrnc";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

export default function ({navigation}) {
  return (
    <SafeAreaView
      style={tw`flex-row justify-center items-center flex-1 h-full w-full flex bg-slate-200`}
    >
      <ScrollView
        contentContainerStyle={tw`px-5 pt-16 flex w-full h-10/12 flex-col justify-around`}
      >
        <Text style={tw`text-sky-900 text-center text-4xl font-bold`}>
          Log in 
        </Text>

        <View>
          <CustomInput
            placeholder="Enter your email adress"
            label="Email Adress"
            iconName="email-outline"
          />
          <CustomInput
            placeholder="Password"
            label="Enter your Password"
            iconName="lock-outline"
            password="12345"
          />
        </View>

        <View>
          <CustomButton onPress={() => navigation.navigate('Index')} title="LOGIN" />
          <View style={tw`flex items-center flex-row ml-auto`}>
            <Text style={tw`text-gray-400 font-light`}>
              Don't have an account ?
            </Text>
            <Text onPress={() => navigation.navigate('singup')} style={tw`mx-3 font-medium text-base text-yellow-500`}>
              Create a new account
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
