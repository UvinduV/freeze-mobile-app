import {StyleSheet, Text, View} from "react-native";

const Header = () => {
    return(
        <View>
            <View style={styles.mainContainer}>
                <Text style={styles.mainText}>FreeZe</Text>
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

    }
});
