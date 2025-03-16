import {useRouter} from "expo-router";
import {useState} from "react";
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function SignUp() {
    const router = useRouter();

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const [name, setName] = useState("");

    function handleSignUp(){}

    function handleNav(){
        router.navigate('/');

    }

    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>Freeze.</Text>
            <View>
                <Text style={styles.titleTxt}>Create your account</Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder={"Your Name"} onChangeText={setName}/>
            </View>
            <View style={styles.inputContainer}>
                <Entypo name={"mail"} size={24} color={"#9A9A9A"} style={styles.inputIcon}></Entypo>
                <TextInput style={styles.textInput} placeholder={"Email"} onChangeText={setUsername}/>
            </View>
            <View style={styles.inputContainer}>
                <FontAwesome name={"user"} size={24} color={"#9A9A9A"} style={styles.inputIcon}></FontAwesome>
                <TextInput style={styles.textInput} placeholder={"Username"} onChangeText={setUsername}/>
            </View>
            <View style={styles.inputContainer}>
                <Fontisto name={"locked"} size={24} color={"#9A9A9A"} style={styles.inputIcon}></Fontisto>
                <TextInput style={styles.textInput} placeholder={"Password"} secureTextEntry onChangeText={setPassword}/>
            </View>

            <TouchableOpacity style={styles.regButton} onPress={handleSignUp}>
                <Text style={styles.regText}>Sign Up</Text>
            </TouchableOpacity>

            <View style={styles.footerContainer}>
                <Text>Or create account using </Text>
                <View style={styles.socialMediaContainer}>
                    <TouchableOpacity>
                        <Ionicons name={"logo-google"} size={30} color={"blue"} style={styles.socialIcon}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name={"logo-facebook"} size={30} color={"blue"} style={styles.socialIcon}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Entypo name={"instagram-with-circle"} size={30} color={"blue"} style={styles.socialIcon}/>
                    </TouchableOpacity>
                </View>

            </View>

            <Text style={styles.footerText}>
                If you have an account?
                <TouchableOpacity onPress={handleNav}>
                    <Text style={{textDecorationLine:"underline",color:"#ea4440"}}> Sign In here</Text>
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
        fontSize: 30,
        fontWeight: 600,
        marginBottom: 2,
        fontFamily: 'Papyrus',
        textAlign:"center",
    },

    inputContainer: {
        backgroundColor: "#fff",
        height: 45,
        borderRadius: 20,
        alignItems: "center",
        flexDirection: "row",
        marginVertical:10,
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

    regButton:{
        backgroundColor:"#ea4440",
        width:"60%",
        marginVertical:10,
        borderRadius:10,
    },
    regText:{
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
    titleTxt:{
        textAlign:"center",
        fontSize:18,
        color:"#262626",
        marginBottom:30,
        fontWeight:"bold",
    },
    inputIcon:{
        marginLeft:15,
    },
    footerText:{
        color:"#262626",
        textAlign:"center",
        fontSize:15,
        marginTop:20,
    },
    footerContainer:{
        marginTop:10,
    },
    socialMediaContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
    },
    socialIcon:{
        backgroundColor:"#fff",
        elevation:10,
        margin:10,
        borderRadius:"100%",
        padding:5,
        shadowColor: 'blue',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,

    }
});
