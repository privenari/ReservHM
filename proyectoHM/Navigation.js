import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

//iconos
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';

//ventanas
import HomeScreen from "./ventanas/HomeScreen";
import Settings from "./ventanas/Settings";
import StackScreen from "./ventanas/StackScreen"; //Stack
import CitasAgendadas from "./ventanas/CitasAgendadas"; //Stack
import ReprogramacionScreen from "./Reprogramacion";
import Reprogramacion from "./Reprogramacion";
import AgendarHora from "./ventanas/AgendarHora";

//Stack
const HomeStackNavigator = createStackNavigator();

function MyStack() {
    return (
        <HomeStackNavigator.Navigator initialRouteName="HomeScreen">
            <HomeStackNavigator.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <HomeStackNavigator.Screen
                name="Stack"
                component={StackScreen}
            />
            <HomeStackNavigator.Screen
                name="Citas_medicas_agendadas"
                component={CitasAgendadas}
            />
            <HomeStackNavigator.Screen
                name="Reprogramacion"
                component={Reprogramacion}
            />
        </HomeStackNavigator.Navigator>
    )
}

//Tab
const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen  
                name="Home" 
                component={MyStack} 
                options={{ 
                    tabBarLabel: 'Inicio', 
                    tabBarIcon: () => (<AntDesign name="home" size={24} color="black" />), 
                    headerShown: false, 
                }} 
            />

            <Tab.Screen
                name="AgendarHora"
                component={AgendarHora}
                options={{
                    tabBarLabel: 'Solicitar hora',
                    tabBarIcon: () => (<Entypo name="clipboard" size={24} color="black" />)
                }}
            />
            
            <Tab.Screen  
                name="Settings" 
                component={Settings} 
                options={{ 
                    tabBarLabel: 'Configuración', 
                    tabBarIcon: () => (<MaterialCommunityIcons name="account-edit-outline" size={24} color="black" 
            />) 
                }}
            />
        </Tab.Navigator>
    );
}