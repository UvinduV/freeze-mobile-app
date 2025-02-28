import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import * as url from "node:url";
import * as path from "node:path";
import {useRouter} from "expo-router";

const ProductCart = ({item}) => {
    const router = useRouter();
    return(
        <View style={styles.container}>
            {/*<Image
                //source={require("../assets/img/women01.jpg")}
                source={item.image}
                style={styles.imageProduct}/>
            <View style={styles.content}>
                <Text style={styles.title}> Long Top</Text>
                <Text style={styles.price}> RS 3391.00</Text>
            </View>*/}
            <TouchableOpacity onPress={()=>router.push(
                    {
                        pathname:'(tabs)/homeMain/productDetails',
                        params:{product: item},
                    }
                )
            }>
                <Image
                    //source={require("../assets/img/women01.jpg")}
                    source={{uri:item.image}}
                    style={styles.imageProduct}/>
                <View style={styles.content}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.price}>${item.price}</Text>
                </View>
            </TouchableOpacity>


        </View>
    )
}
export default ProductCart;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginBottom:10,
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