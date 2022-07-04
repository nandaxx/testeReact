import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import MyHeader from "../../components/header";

const Categorias = () => {

    return (
        <View style={styles.container}>
            <MyHeader/>
            <Text>
                Categoria
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    }
})

export default Categorias;