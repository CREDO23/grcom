import {View} from 'react-native'
import {Text , Input , Button} from 'react-native-elements'
import tw from 'twrnc'




export default function(){
    return (
        <View style={tw`h-full flex justify-center items-center`}>
             
            <View style={tw` w-full`}>
                <Text style={tw` font-bold text-4xl text-yellow-400`}>Welcome back !</Text>
                <Text style={tw` font-bold text-lg`}>Log in your account</Text>
            </View>
            <View style={tw`w-full`}>
                <Input leftIcon={
                    {
                        name : 'user'
                    }
                } label='UserName' placeholder='Credo23'></Input>
                <Input label='Password' placeholder='*******'></Input>
            </View>
            <Text>Forgot password ?</Text>
            <Button buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }} titleStyle={{color : 'rgb(250,204,21)'}} title='Login'/>
            <Text style={tw`font-thin`}>Terms and conditions</Text>
        </View>
       
    )
}