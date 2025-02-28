import {Text, StyleSheet, TextInput, View, Button, TouchableOpacity} from "react-native";
import {Link, router, useRouter} from "expo-router";
import {useState} from "react";
import Fontisto from "react-native-vector-icons/Fontisto";

export default function Index(){

    const router = useRouter();

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    function handleLogin(){
        if(username === "sanu" && password === "1212"){
            router.replace('/homeMain');
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>Welcome to Freeze.!</Text>

            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder={"Username"} onChangeText={setUsername}/>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder={"Password"} secureTextEntry onChangeText={setPassword}/>
            </View>

            {/*<Button onPress={handleLogin} title='Login'/>*/}
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.text}>@Freeze_fashion</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container :{
        flex:1,
        justifyContent: "center",
        alignItems:"center",
        padding: 20,
        backgroundColor: "#ffeded",
    },
    mainText: {
        fontSize: 30,
        fontWeight: 600,
        marginBottom: 60,
        fontFamily: 'Papyrus',
    },

    inputContainer: {
        backgroundColor: "#fff",
        height: 45,
        borderRadius: 12,
        alignItems: "center",
        flexDirection: "row",
        marginVertical:10
    },
    textInput: {
        flex: 1,
        paddingLeft:10,
        paddingRight:10,

    },

    loginButton:{
        backgroundColor:"#ea4440",
        width:"60%",
        marginVertical:10,
        borderRadius:10,
    },
    loginText:{
        fontSize:20,
        fontWeight:"400",
        color:"#fff",
        textAlign:"center",
        padding:10,
    },
    text:{
        color:"#757575",
        fontSize:12,
        marginTop:20,
    },
});
