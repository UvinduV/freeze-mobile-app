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
            <View style={styles.cardMain}>
                <View style={styles.cardContainer}>
                    <Text style={styles.title}>Polo t-shirt</Text>
                    <Text style={styles.price}>Rs.1780.00</Text>
                    <View style={styles.cardSizeContainer}>
                        <Text> M </Text>
                    </View>
                </View>
            </View>
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
    },

//
    cardMain: {
        marginVertical:10,
        flexDirection:"row",
        backgroundColor: "#f8a065",
        borderRadius:5,
    },

    cardContainer: {
        flex: 1,

    },
    title: {
        fontSize:18,
        color:"#494848",
        fontWeight:"500",
    },
    price: {
        color:"#494848",
        marginVertical:10,
        fontSize:15,
    },
    cardSizeContainer: {
        height:30,
        width:30,
        borderRadius:16,
        backgroundColor:"#fff",
        justifyContent:"center",
        alignItems:"center"
    }
})