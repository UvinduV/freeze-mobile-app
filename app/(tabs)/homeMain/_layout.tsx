import { Stack } from "expo-router";

export default function HomeMainLayout() {
    return (
        <Stack initialRouteName='home'>
            <Stack.Screen name= 'home' options={{headerShown: false}}/>
            <Stack.Screen name='productDetails' options={{headerShown: false}} />
        </Stack>
    );
}