import {View, Text, StyleSheet} from 'react-native';

export const Favorite = () => {
    return(
        <View style={styles.container}>
            <Text>Página Favoritos!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "pink"
    }
})