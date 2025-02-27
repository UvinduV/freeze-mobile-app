import {Text, StyleSheet, TextInput, View, Button} from "react-native";
import {Link, router, useRouter} from "expo-router";
import {useState} from "react";

export default function Index(){

    const router = useRouter();

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    function handleLogin(){
        if(username === "sanu" && password === "1212"){
            router.replace('/home');
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>Welcome to Freeze.!</Text>
            <Text style={styles.loginText}>Login</Text>
            <TextInput style={styles.textFields} placeholder='Username' onChangeText={setUsername}/>
            <TextInput style={styles.textFields} placeholder='Password' secureTextEntry onChangeText={setPassword}/>
            <Button onPress={handleLogin} title='Login'/>
        </View>
    );
}
const styles = StyleSheet.create({
    container :{
        flex:1,
        justifyContent: "center",
        alignItems:"center",
        padding: 20
    },
    mainText: {
        fontSize: 25,
        fontWeight: "bold",
    },
    loginText: {
        fontSize: 20,
        fontWeight: "semibold",
        marginBottom: 20
    },
    textFields :{
        borderWidth: 1,
        padding: 10,
        marginBottom : 10
    },
});
