import { SafeAreaView, Text, View , ScrollView } from "react-native";
import tw from "twrnc";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import ChoiceInput from "../../components/ChoiceInput";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

export default function ({ navigation }) {
  return (
    <SafeAreaView
      style={tw`flex-row justify-center items-center flex-1 h-full w-full flex bg-slate-200`}
    >
      <ScrollView
        contentContainerStyle={tw`p-5 pt-10 flex w-full flex-col justify-around`}
      >
        <View>
          <Text style={tw`text-sky-900 text-center text-3xl`}>
            S'enregister
          </Text>
          <Text style={tw`text-gray-500 text-center text-base font-normal`}>
            - Etes - vous un apiculteur ? -
          </Text>
        </View>

        <View>
          <CustomInput
            placeholder="Entrer voter nom"
            label="Nom"
            iconName="account-outline"
          />
          <CustomInput
            placeholder="Enter votre postnom"
            label="Post Nom"
            iconName="account-outline"
          />
          <CustomInput
            placeholder="Enter votre prenom"
            label="Prenom"
            iconName="account-outline"
          />
            <CustomInput
            placeholder="Entrer votre numero de téléphone"
            label="Numero de Téléphone"
            iconName="phone"
          />
          <CustomInput
            placeholder="Entrer votre mot de pass"
            label="Mot de Pass"
            iconName="lock-outline"
            password="12345"
          />
         
           <CustomInput
            placeholder="Confirmer votre mot de pass"
            label="Mot de Pass"
            iconName="lock-outline"
            password="12345"
          />
          <ChoiceInput
            label="Genre"
            choices={[
              {
                icon: () => <Icon name='face-woman' style={tw`text-2xl text-sky-900`} />,
                brand: "Femme",
              },
              {
                icon: () => <Icon name='face-man' style={tw`text-2xl text-sky-900`} />,
                brand: "Home",
              },
            ]}
          />
          <ChoiceInput
            label="Fonction"
            choices={[
              {
                icon: "bee",
                brand: "Apiculteur",
              },
              {
                icon: "office-building-outline",
                brand: "Fabricant",
              },
              {
                icon: "face-man",
                brand: "Formateur",
              }
            ]}
          />
        </View>

        <View style={tw`my-8`}>
          <CustomButton
            onPress={() => navigation.navigate("singin")}
            title="CREATE"
          />
          <View style={tw`flex items-center flex-row ml-auto`}>
            <Text style={tw`text-gray-400 font-light`}>
              Already have an account ?
            </Text>
            <Text
              onPress={() => navigation.navigate("singin")}
              style={tw`mx-3 font-normal text-base text-yellow-500`}
            >
              Singin
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
