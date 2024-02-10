import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {Home} from "./pages/home"
import {Password} from "./pages/password"
import {Ionicons} from "@expo/vector-icons"
import {StyleSheet} from "react-native"

const Tab = createBottomTabNavigator();

export function Routes(){
    return(
        <Tab.Navigator>
            
            <Tab.Screen
            
                name="home"
                component={Home}
                color = {"black"}
                options={{
                    
                    headerShown: false,
                    tabBarIcon: ({focused}) => {
                        if(focused){
                            return <Ionicons size={30} color={"black"} name="home"/>
                        }
                        return <Ionicons size={30} color={"black"} name="home-outline"/>
                    },
                    tabBarStyle:{
                        backgroundColor:"#520202",
                        
                    },
                    tabBarLabelStyle:{
                        color:"black",
                    }
                    
                }}
            />
            <Tab.Screen
                name="password"
                
                component={Password}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused,}) => {
                        if(focused){
                            return <Ionicons size={30} color={"black"} name="lock-closed"/>
                        }
                        return <Ionicons size={30} color={"black"} name="lock-closed-outline"/>
                    },
                    tabBarLabelStyle:{
                        color:"black",
                    }
                }}
            />
        </Tab.Navigator>
    )
}

const style = StyleSheet.create({
    navBar:{
        
    }
})