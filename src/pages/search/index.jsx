import {View, Text, StyleSheet} from 'react-native';

export const Search = () => {
    return(
        <View style={styles.container}>
            <Text>Página Search!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "green"
    }
})