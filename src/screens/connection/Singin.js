import { SafeAreaView, Text, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import tw from "twrnc";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import logo from '../../Images/logo.png'
import facebookIcon from '../../Images/facebook.png'
import twitterIcon from '../../Images/twitter.png'
import googleIcon from '../../Images/google.png'

export default function ({ navigation }) {
  return (
    <SafeAreaView
    style={tw`flex-row justify-center items-center flex-1 h-full w-full flex bg-slate-200`}
  >
    <ScrollView
      contentContainerStyle={tw`p-5 pt-10 flex w-full h-full flex-col justify-around`}
    >
        <View style={tw`flex items-center justify-center`}>
        <Image
          style={tw` h-48 rounded-full w-48 border border-white`}
          source={logo}
        />
        </View>
       

        <Text style={tw`text-sky-900 text-center text-3xl `}>
          Se Connecter
        </Text>

        <View style={tw`flex px-12 flex-row justify-evenly`}>
          <Image  style={tw` h-10 rounded-full w-10`} source={facebookIcon}/>
          <Image  style={tw` h-10 rounded-full w-10`} source={twitterIcon}/>
          <Image  style={tw` h-10 rounded-full w-10`} source={googleIcon}/>
        </View>

        <View style={tw`flex justify-center items-center`} ><Text style={tw`text-gray-500 text-center text-base font-normal`}>- Ou , Avec vos Identifiants -</Text></View>

        <View>
          <CustomInput
            placeholder="Enter votre numero de téléphone"
            label="Numero de téléphone"
            iconName="phone"
          />
          <CustomInput
            placeholder="Password"
            label="Enter your Password"
            iconName="lock-outline"
            password="12345"
          />
        </View>

        <View>
          <CustomButton
            onPress={() => navigation.navigate("Index")}
            title="LOGIN"
          />
          <View style={tw`flex items-center flex-row ml-auto`}>
            <Text style={tw`text-gray-400 font-light`}>
              Don't have an account ?
            </Text>
            <Text
              onPress={() => navigation.navigate("singup")}
              style={tw`mx-3 font-normal text-base text-yellow-500`}
            >
              Create a new account
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
