import {StyleSheet, Text, View} from "react-native";
import Header from "../../../components/header";


export default function ProductDetails() {
    return (
        <View style={styles.container}>
            <View>
                <Header/>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffeded",
        padding:20
    },

})