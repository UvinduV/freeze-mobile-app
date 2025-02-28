import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import FontAwesome6Icon from "react-native-vector-icons/FontAwesome6";

const CartCard = ()=>{
    return (
        <View style={styles.container}>
            <Image source={{uri:""}} style={styles.coverImage}/>
            <View style={styles.cardContainer}>
                <Text style={styles.title}>title</Text>
                <Text style={styles.price}>price</Text>
                <View style={styles.cardSizeContainer}>
                    <Text> S </Text>
                </View>
            </View>
            <TouchableOpacity>
                <FontAwesome6Icon name={"trash"} color={"red"} size={20}/>
            </TouchableOpacity>


        </View>
    )
}
export default CartCard;

const styles = StyleSheet.create({
    container: {
        marginVertical:10,
        flexDirection:"row"
    },
    coverImage: {
        height:80,
        width:"30%",
        borderRadius:20
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