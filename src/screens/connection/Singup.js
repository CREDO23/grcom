import { SafeAreaView, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import tw from "twrnc";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

export default function () {
  return (
    <SafeAreaView style={tw`flex-row justify-center items-center flex-1 h-full w-full flex bg-slate-200`}>
      <ScrollView
        contentContainerStyle={tw`px-5 pt-16 flex w-full h-10/12 flex-col justify-around`}
      >
        
        <Text style={tw`text-sky-900 text-4xl font-bold`}>Create an Account</Text>

        

        <View>
          <CustomInput
            placeholder="Enter your user name"
            label="User Name"
            iconName="account-outline"
          />
          <CustomInput
            placeholder="Enter your email adress"
            label="Email Adress"
            iconName="email-outline"
          />
          <CustomInput
            placeholder="Enter your password"
            label="Password"
            iconName="lock-outline"
            password="12345"
          />
          <CustomInput
            placeholder="Confirm your password"
            label="Confirm Password"
            iconName="lock-outline"
            password="12345"
          />
        </View>

        <View>
          <CustomButton title="CREATE" />
          <View style={tw`flex flex-row ml-auto`}>
            <Text style={tw`text-gray-400 font-light`}>
              Already have an account ?
            </Text>
            <Text style={tw`mx-3 font-bold text-yellow-500`}>Singin</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
