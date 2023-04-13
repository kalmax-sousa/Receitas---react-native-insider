import { View } from "moti";
import { StyleSheet, Text } from "react-native";

export const Logo = () => {
    return(
        <View
            style={styles.logoArea}
            from={{
                opacity: 0,
                translateX: -50,
            }}
            animate={{
                opacity: 1,
                translateX: 0,
            }}
            transition={{
                type: "timing",
                duration: 700
            }}
        >
            <Text style={styles.logo}>Receita Fácil</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    logoArea:{
        alignSelf: "flex-start",
        backgroundColor: "#4CBE6C",
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 32,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        marginBottom: 8,
        padding: 8,
        paddingLeft: 16,
        paddingRight: 20
    },
    logo:{
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold"
    }
})