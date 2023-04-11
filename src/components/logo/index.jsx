import { StyleSheet, Text, View } from "react-native";

export const Logo = () => {
    return(
        <View style={styles.logoArea}>
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