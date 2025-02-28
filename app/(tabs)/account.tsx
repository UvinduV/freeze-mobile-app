import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Header from "../../components/header";

export default function Account(){
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Header isCart={false}/>
            </View>

            <View style={styles.header}>
                <Text style={styles.titleText}>User</Text>
                <Image source={require("../../assets/img/user1.png")}
                       style={styles.profileImage}/>

            </View>
            <TouchableOpacity style={styles.viewOrderButton}>
                <Text style={styles.buttonText}> My Orders </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffeded",
        padding: 20
    },
    headerContainer: {
        marginBottom: 7
    },
    profileImage: {
        height: 44,
        width: 44,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    titleText: {
        fontSize: 20,
        color: "#000000",
    },
    viewOrderButton:{
        backgroundColor:"#fff",
        width:"100%",
        marginVertical:10,
        borderRadius:10,
    },
    buttonText:{
        fontSize:20,
        fontWeight:"400",
        color:"#000",
        textAlign:"right",
        padding:10,
        marginRight:20
    }
})