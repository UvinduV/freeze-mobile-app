import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Header from "../../../components/header";
import {useState} from "react";
import {useLocalSearchParams, useRouter} from "expo-router";
import {handleUrlParams} from "expo-router/build/fork/getStateFromPath-forks";

export default function ProductDetails() {

    const params = useLocalSearchParams();
    //const item = params.item;
    const item = params.item ? JSON.parse(params.item as string) : null;
    console.log("Product Details:", item);

    const [selectSize, setSelectSize] = useState("");
    const sizes= ['S', 'M', 'L', 'XL'];

    const handleAddToCart = (item) => {
        console.log(item);
    }

    return (
        <View style={styles.container}>
            <View>
                <Header isCart={false}/>
            </View>
            <Image source={{uri:item.image}}
                style={styles.coverImage}/>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>{item.price}</Text>
            </View>

            {/*size*/}
            <Text style={styles.price}>Size</Text>
            <View style={styles.sizeContainer}>
                {
                    sizes.map((size) => {
                        return(
                            <TouchableOpacity style={styles.sizeValueContainer} onPress={()=>{
                                setSelectSize(size);
                                console.log("size:",size);
                            }}>
                                <View>
                                    <Text style={[styles.sizeValue,
                                        selectSize == size && { color: "#E55B58"},]}>
                                        {size}
                                    </Text>
                                </View>
                            </TouchableOpacity>

                        )
                    })
                }
            </View>

            {/*Add cart btn*/}
            <TouchableOpacity style={styles.button} onPress={()=>{handleAddToCart(item)}}>
                <Text style={styles.buttonText}>Add Cart</Text>
            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffeded",
        padding:20
    },
    coverImage: {
        width:"100%",
        height:350,
        borderRadius: 10,
    },
    contentContainer: {
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:20,
        marginVertical:20
    },
    title: {
        fontSize:20,
        color:"#291919",
        fontWeight:400
    },
    price: {
        color:"#282626",
    },
    sizeContainer:{
        flexDirection:"row",
        marginHorizontal:20,
    },
    sizeValueContainer:{
        height:36,
        width:36,
        borderRadius: 20,
        backgroundColor:"#fff",
        justifyContent:"center",
        alignItems: "center",
        marginHorizontal: 8,

    },
    sizeValue:{
        fontSize: 16,

    },
    button:{
        backgroundColor: "#E55B58",
        padding: 10,
        margin:10,
        borderRadius:20
    },
    buttonText:{
        fontSize:20,
        fontWeight:"600",
        color:"#fff",
        textAlign:"center",
    }




})