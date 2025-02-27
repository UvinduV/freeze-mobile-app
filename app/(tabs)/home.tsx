import {StyleSheet, Text, View} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

export default function Home (){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Sign in with Facebook
            </Text>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});