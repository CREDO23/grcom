
import {createDrawerNavigator} from '@react-navigation/drawer'
import Home from './Home'



export default function () {

    const Draw = createDrawerNavigator()
    return <Draw.Navigator>
        <Draw.Screen name='Home' component={Home}/>
    </Draw.Navigator>
}