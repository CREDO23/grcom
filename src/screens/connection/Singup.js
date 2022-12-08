import { SafeAreaView, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import tw from "twrnc";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

export default function () {
  return (
    <SafeAreaView style={tw`flex-1 h-full bg-slate-200`}>
      <ScrollView contentContainerStyle={tw`px-5 pt-16 flex h-full flex-col justify-around`}>
        <View>
          <Text style={tw`text-sky-900 text-4xl font-bold`}> Register</Text>
          <Text style={tw` text-gray-400 text-base mx-2 `}>
            Enter Your Details To Register
          </Text>
        </View>

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
          <View style={tw`my-10`}>
            <CustomButton title="Register" />
            <CustomButton auxilliary={true} title="Login" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
