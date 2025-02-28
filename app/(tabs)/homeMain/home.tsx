import {FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {LinearGradient} from 'react-native-linear-gradient';
import Header from "../../../components/header";
import Fontisto from "react-native-vector-icons/Fontisto";
import ProductCart from "../../../components/productCart";
import data from "../../../data/data.json";
import {useState} from "react";

export default function Home (){
    const [products, setProducts] = useState(data.products);

    return (
        <View style={styles.container}>
            <Header isCart={false}/>
            <Text style={styles.selectText}>Select Your Style</Text>
            {/*input*/}
            <View style={styles.inputContainer}>
                <View style={styles.iconContainer}>
                    <Fontisto name={"search"} size={20} color={"#C0C0C0"} />
                </View>
                <TextInput style={styles.textInput} placeholder={"Search"} onChangeText={(text)=>{}}/>
            </View>
            {/*product list*/}

            {/*<FlatList numColumns={2} data={products} renderItem={ProductCart}
                      showsVerticalScrollIndicator={false}
            />*/}
            <FlatList numColumns={2}
                      data={products}
                      renderItem={({item})=>
                          <ProductCart item={item}/>
                      }
                      showsVerticalScrollIndicator={false}
            />


        </View>




    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffeded",
        padding:20
    },
    selectText: {
        fontSize: 25,
        color: "#000",
        marginTop: 25,
    },
    inputContainer: {
        backgroundColor: "#fff",
        height: 45,
        borderRadius: 12,
        alignItems: "center",
        flexDirection: "row",
        marginVertical:10
    },
    textInput: {
        flex: 1,

    },
    iconContainer: {
        marginHorizontal: 15,
    },
    productMain: {
        flexDirection: "row",
        justifyContent: "space-between",
    }
});