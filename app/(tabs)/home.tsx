import {StyleSheet, Text, TextInput, View} from "react-native";
import {LinearGradient} from 'react-native-linear-gradient';
import Header from "../../components/header";
import Fontisto from "react-native-vector-icons/Fontisto";

export default function Home (){
    return (
        <View style={styles.container}>
            <Header/>
            <Text style={styles.selectText}>Select Your Style</Text>
            <View style={styles.inputContainer}>
                <View style={styles.iconContainer}>
                    <Fontisto name={"search"} size={20} color={"#C0C0C0"} />
                </View>
                <TextInput style={styles.textInput} placeholder={"Search"} onChangeText={(text)=>{}}/>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffeded",
        padding:20
    },
    selectText: {
        fontSize: 25,
        color: "#000",
        marginTop: 25,
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

    },
    iconContainer: {
        marginHorizontal: 15,
    }
});