import {FlatList, StyleSheet, Text, TextInput, View} from "react-native";
import {LinearGradient} from 'react-native-linear-gradient';
import Header from "../../components/header";
import Fontisto from "react-native-vector-icons/Fontisto";
import ProductCart from "../../components/productCart";

export default function Home (){
    return (
        <View style={styles.container}>
            <Header/>
            <Text style={styles.selectText}>Select Your Style</Text>
            {/*input*/}
            <View style={styles.inputContainer}>
                <View style={styles.iconContainer}>
                    <Fontisto name={"search"} size={20} color={"#C0C0C0"} />
                </View>
                <TextInput style={styles.textInput} placeholder={"Search"} onChangeText={(text)=>{}}/>
            </View>
            {/*product list*/}
            {/*<View style={styles.productMain}>*/}
            {/*    <ProductCart/>*/}
            {/*    <ProductCart />*/}
            {/*</View>*/}
            <FlatList numColumns={2} data={[1,2,3,4,5,6]} renderItem={ProductCart}
                      showsVerticalScrollIndicator={false}/>


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