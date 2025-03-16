import {Text, StyleSheet, TextInput, View, Button, TouchableOpacity} from "react-native";
import {Link, router, useRouter} from "expo-router";
import {useState} from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fonttisto from "react-native-vector-icons/Fontisto";
import Fontisto from "react-native-vector-icons/Fontisto";

export default function Index(){

    const router = useRouter();

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    function handleLogin(){
        if(username === "Sanketh12" && password === "1212"){
            router.replace('/homeMain');
        }
    }
    function handleNav(){
        router.navigate('signUp');

    }
    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>Welcome to Freeze.!</Text>
            <View>
                <Text style={styles.signInTxt}>Sign in your account</Text>
            </View>

            <View style={styles.inputContainer}>
                <FontAwesome name={"user"} size={24} color={"#9A9A9A"} style={styles.inputIcon}></FontAwesome>
                <TextInput style={styles.textInput} placeholder={"Username"} onChangeText={setUsername}/>
            </View>
            <View style={styles.inputContainer}>
                <Fontisto name={"locked"} size={24} color={"#9A9A9A"} style={styles.inputIcon}></Fontisto>
                <TextInput style={styles.textInput} placeholder={"Password"} secureTextEntry onChangeText={setPassword}/>
            </View>
            <Text style={styles.forgotPassword}>Forgot Your Password?</Text>

            {/*<Button onPress={handleLogin} title='Login'/>*/}
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.footerText}> Don't have an account?
                <TouchableOpacity onPress={handleNav}>
                    <Text style={{textDecorationLine:"underline",color:"#ea4440"}}> Create new</Text>
                </TouchableOpacity>

            </Text>
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
        fontSize: 35,
        fontWeight: 600,
        marginBottom: 10,
        fontFamily: 'Papyrus',
        textAlign:"center",
    },

    inputContainer: {
        backgroundColor: "#fff",
        height: 45,
        borderRadius: 20,
        alignItems: "center",
        flexDirection: "row",
        marginVertical:20,
        marginHorizontal:40,
        elevation:20,
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,

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
    signInTxt:{
        textAlign:"center",
        fontSize:18,
        color:"#262626",
        marginBottom:40,
        fontWeight:"thin",
    },
    inputIcon:{
        marginLeft:15,
    },
    forgotPassword:{
        color:"#BEBEBE",
        textAlign:"right",
        width:"90%",
        fontSize:15,
    },
    footerText:{
        color:"#262626",
        textAlign:"center",
        fontSize:15,
        marginTop:60,
    }
});
