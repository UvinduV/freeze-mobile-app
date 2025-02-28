import {Image, StyleSheet, Text, View} from "react-native";

const ProductCart = () => {
    return(
        <View style={styles.container}>
            <Image
                source={require("../assets/img/women01.jpg")}
                style={styles.imageProduct}/>
            <View style={styles.content}>
                <Text style={styles.title}> Long Top</Text>
                <Text style={styles.price}> RS 3391.00</Text>
            </View>


        </View>
    )
}
export default ProductCart;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // borderWidth:1,
        // backgroundColor:'#000',
    },
    imageProduct:{
        height:256,
        width:"90%",
        borderRadius:20,
        marginVertical:10,
        marginLeft:10,

    },
    title:{
        fontSize:18,
        fontWeight:600,
        color: "#000"
    },
    price:{
        fontSize: 16,
        color: "#9C9C9C"
    },
    content:{
        paddingLeft:10,
    }
});