import { Tabs } from "expo-router";

export default function TabLayout(){
    return (
        <Tabs>
            <Tabs.Screen name='home' options={{headerTitle:'Home', title:'Home'}} />
            <Tabs.Screen name='categories' options={{headerTitle:'Category', title:'shop'}} />
            <Tabs.Screen name='cart' options={{headerTitle:'Cart', title:'Cart'}} />
            <Tabs.Screen name='account' options={{headerTitle:'My Account', title:'You'}} />
        </Tabs>
    )
}