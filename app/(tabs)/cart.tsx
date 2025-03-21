import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Header from "../../components/header";
import CartCard from "../../components/cartCard";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useRouter} from "expo-router";

export default function Cart(){

    const router = useRouter();
    const carts = useSelector(state => state.cart);
    const [totalPrice, setTotalPrice] = useState(0);

    const calculateTotalPrice = () => {
        let totalSum = carts.reduce((total:any, item:any) => total + item.price, 0);
        totalSum = totalSum.toFixed(2);
        setTotalPrice(totalSum);
    };
    const handlePlaceOrder = () => {
        alert("place order successfully.!");
        router.navigate("(tabs)/account")
    }
    useEffect(() => {
        calculateTotalPrice();
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Header isCart={true}/>
            </View>

            {/*<CartCard/>*/}
            {/*<CartCard/>*/}
            <FlatList
                data={carts}
                renderItem={({ item }) => <CartCard item={item} />}
                keyExtractor={(item, index) => index.toString()}
            />

            {/*price*/}
            <View style={styles.priceContainer}>
                <View style={styles.priceAndTitle}>
                    <Text style={styles.text}>Total</Text>
                    <Text style={[styles.text,{fontWeight:"600"},{color: "black"}]}>{totalPrice}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.placeButton}>
                <Text style={styles.buttonText} onPress={handlePlaceOrder}>Place Order</Text>
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
        marginBottom:7
    },
    priceContainer:{
        marginTop: 40,
    },
    priceAndTitle:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginVertical: 10,
    },
    text:{
        color:"#757575",
        fontSize:16,
    },
    placeButton:{
        backgroundColor:"#ea4440",
        width:"100%",
        marginVertical:10,
        borderRadius:10,
    },
    buttonText:{
        fontSize:20,
        fontWeight:"400",
        color:"#fff",
        textAlign:"center",
        padding:10,
    }
})