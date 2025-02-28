import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Header from "../../../components/header";
import {useState} from "react";
import {useLocalSearchParams, useRouter} from "expo-router";
import {ProductModel} from "../../../models/productModel";
import {addCart} from "../../../reducers/CartSlice";
import {useDispatch, useSelector} from "react-redux";

export default function ProductDetails() {
    const router = useRouter();
    const dispatch = useDispatch();
    // const carts = useSelector(state => state.cart);

    const params = useLocalSearchParams();
    //const item = params.item;
    const item = params.item ? JSON.parse(params.item as string) : null;
    console.log("Product Details:", item);

    const [image, setImage] = useState(item.image);
    const [title, setTitle] = useState(item.title);
    const [price, setPrice] = useState(item.price);
    const [selectSize, setSelectSize] = useState("");
    const sizes= ['S', 'M', 'L', 'XL'];

    const handleAddToCart = () => {
        console.log(item);

        const addProduct = new ProductModel(image, title, price, selectSize);
        dispatch(addCart(addProduct));
        alert("Product Added Successfully!");
        console.log(addProduct);
        router.push(
            {
                pathname:'(tabs)/cart',
            }
        )

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
            <TouchableOpacity style={styles.button} onPress={()=>{handleAddToCart()}}>
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