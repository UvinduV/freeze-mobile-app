import {StyleSheet, Text, View} from "react-native";
import Header from "../../components/header";

export default function Cart(){
    return (
        <View style={styles.container}>
            <Header isCart={true}/>
            <Text>cart</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffeded",
        padding: 20
    },
})