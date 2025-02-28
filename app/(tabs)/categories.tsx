import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Header from "../../components/header";

export default function Categories(){
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Header isCart={false}/>
            </View>
            <View style={styles.titleTextMain}>
                <Text style={styles.titleText}>Categories</Text>
                <View>
                    <TouchableOpacity style={styles.viewButton}>
                        <Text style={styles.buttonText}> Mens </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.viewButton}>
                        <Text style={styles.buttonText}> Women </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.viewButton}>
                        <Text style={styles.buttonText}> Kids </Text>
                    </TouchableOpacity>
                </View>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffeded",
        padding: 20,
    },
    headerContainer: {
        marginBottom: 7
    },
    titleTextMain: {
        justifyContent: "center",
        alignItems: "center",
        marginTop:20,
    },
    titleText: {
        fontSize: 20,
        color: "#b35a5a",
        fontWeight: "bold",
    },
    viewButton:{
        backgroundColor:"#fff",
        width:"100%",
        marginVertical:10,
        borderRadius:10,
    },
    buttonText:{
        fontSize:15,
        fontWeight:"100",
        color:"#000",
        textAlign:"left",
        padding:10,
        marginLeft:10
    }
})