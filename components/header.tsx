import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useRouter} from "expo-router";


const Header = ({isCart}) => {
    const router = useRouter();
    return(
        <View>

            <View style={styles.mainContainer}>

                {isCart ? (
                    <View style={{ flexDirection: "row", alignItems: "center"}}>
                        <TouchableOpacity onPress={() => router.push('/homeMain')}>
                            <Ionicons name="chevron-back" color="#E96E6E" size={20} />
                        </TouchableOpacity>

                        <Text style={styles.cartText}>My cart</Text>
                    </View>
                ) : (
                    <Text style={styles.mainText}>FreeZe</Text>
                )}
                {/*<Text style={styles.mainText}>FreeZe</Text>*/}
            </View>

        </View>
    )
}

export default Header;

const styles = StyleSheet.create({

    mainContainer:{
        backgroundColor: '#fff',
        borderRadius: 40 ,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,

    },
    mainText: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Papyrus',
        padding: 7,

    },
    cartText: {
        fontSize: 16,
        fontFamily: 'sans-serif',
        padding: 7,
    }
});
