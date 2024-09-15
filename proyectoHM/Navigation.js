import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

//iconos
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

//ventanas
import Home from "./ventanas/Home";
import Settings from "./ventanas/Settings";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen  name="Home" component={Home} options={{ tabBarLabel: 'Inicio', tabBarIcon: () => (<AntDesign name="home" size={24} color="black" />) }} />
            <Tab.Screen  name="Settings" component={Settings} options={{ tabBarLabel: 'Configuración', tabBarIcon: () => (<MaterialCommunityIcons name="account-edit-outline" size={24} color="black" />) }}/>
        </Tab.Navigator>
    );
}