import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Header from "../../../components/header";
import {useState} from "react";
const imageUrl = "https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567613/cwlk21f74nd9iamrlzkh.png"

export default function ProductDetails() {
    const [selectSize, setSelectSize] = useState("");
    const sizes= ['S', 'M', 'L', 'XL'];

    return (
        <View style={styles.container}>
            <View>
                <Header/>
            </View>
            <image source={{uri: imageUrl}} style={styles.coverImage}/>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Jacket</Text>
                <Text style={styles.price}>1250.00</Text>
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
        height:420,
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

    }




})