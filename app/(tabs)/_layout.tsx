import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout(){
    return (
        <Tabs screenOptions={{headerShown:false,tabBarActiveTintColor:"#D84040"}}>
            <Tabs.Screen name='homeMain' options={{headerTitle:'Home', title:'Home',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home" size={size} color={color} />
                )}} />
            <Tabs.Screen name='categories' options={{headerTitle:'Category', title:'shop',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="grid" size={size} color={color} />
                )}} />
            <Tabs.Screen name='cart' options={{headerTitle:'Cart', title:'Cart',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="cart" size={size} color={color} />
                ),}} />
            <Tabs.Screen name='account' options={{headerTitle:'My Account', title:'You',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person" size={size} color={color} />
                )}} />
        </Tabs>
    )
}