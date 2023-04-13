import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {Feather} from '@expo/vector-icons';
import {WebView} from 'react-native-webview';

export const VideoView = ({handleClose, videoUrl}) => {
    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={handleClose} style={styles.backButton}>
                <Feather name="arrow-left" size={24} color="#fff" />
                <Text style={styles.backText}>Voltar</Text>
            </TouchableOpacity>
            <WebView
                style={styles.contentView}
                source={{uri: videoUrl}}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
    backButton: {
        width: "100%",
        backgroundColor: "#4cbe6c",
        flexDirection: "row",
        alignItems: "center",
        paddingStar: 14,
        height: 48,
        gap: 14,
    },
    backText: {
        color: "#fff",
        fontSize: 18,
    },
    contentView:{
        flex: 1,
        width: "100%"
    }
})