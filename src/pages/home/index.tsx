import React from 'react';
import { ScrollView } from "react-native-gesture-handler";
import { Title } from 'react-native-paper';
import Card from '../../components/card/cardCategoria';
import CardImg from '../../components/card/cardImage';
import CardPromo from '../../components/card/cardPropa';
import MySearch from '../../components/search';
import { View, StyleSheet, Alert, ActivityIndicator, Image } from "react-native";
import { Text, Input, Icon, Button } from "react-native-elements";

const Home = ({navigation}) => {

    return (
        <ScrollView style={styles.container}>
            <MySearch/>
       {/* <Button icon={<Icon name="check" size={15} color="white"/>}
        title="Sair"
        onPress={() => Logout(navigation)}
    />*/}
            <Card/>
            <Title>Recentes</Title>
            <CardImg/>
            <Title>Destaques</Title>
            <CardPromo/>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#C9A7AE',
    }
})
export default Home;