import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Index from "./DrawerNavigation";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import tw from 'twrnc'

export default function () {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{ headerShown: false , tabBarShowLabel : false }}>
      <Tab.Screen name="home" options={{tabBarIcon: () => <Icon name='home' style={tw`text-xl text-yellow-400`}/>  }} component={Index} />
      <Tab.Screen name="user" options={{tabBarIcon: () => <EntypoIcon name='user' style={tw`text-xl text-yellow-400`}/>}} component={Index} />
    </Tab.Navigator>
  );
}
