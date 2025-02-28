import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import FontAwesome6Icon from "react-native-vector-icons/FontAwesome6";
import {useDispatch} from "react-redux";
import {removeCart} from "../reducers/CartSlice";

const CartCard = ({item})=>{
    const dispatch = useDispatch();

    const title = item.title;
    const handleRemoveToCart= (title: string) => {
        dispatch(removeCart(title));

    }


    return (
        <View style={styles.container}>
            <Image source={{uri:item.image}} style={styles.coverImage}/>
            <View style={styles.cardContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>{item.price}</Text>
                <View style={styles.cardSizeContainer}>
                    <Text> {item.selectSize} </Text>
                </View>
            </View>
            <TouchableOpacity onPress={()=>{handleRemoveToCart(title)}}>
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