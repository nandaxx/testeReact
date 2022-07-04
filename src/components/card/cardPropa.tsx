import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { Card } from 'react-native-elements'

const CardPromo = () => {

    return (
        <ScrollView style={styles.container} horizontal={true}>
            <View style={styles.box}>
                <Card>
                    <Card.Title>Title</Card.Title>
                    <Card.Image style={styles.imagem} source={require('../../assets/promo.jpg')} />
                    <Text>description</Text>
                </Card>
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 400,
        padding: 0,
    },
    box: {
        width: 400,
        padding: 0,
        justifyContent: 'center',
    },
    imagem: {
        height: 200,
    }
})

export default CardPromo;