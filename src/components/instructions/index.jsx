import { StyleSheet, Text, View } from "react-native";

export const Instructions = ({index, data}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.indicator}>{index+1}. </Text>
            <Text style={styles.text}>{data.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 9,
        marginBottom: 14,
    },
    indicator: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    text: {
        marginTop: 2,
        lineHeight: 20,
        flex: 1,
    }
})