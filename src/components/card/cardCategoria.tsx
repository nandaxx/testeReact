import React, { useEffect, useState, useContext } from 'react';
import { ScrollView, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements';
import AxiosInstance from '../../api/axios';
import { AutenticacaoContext } from "../../context/autenticacaoContext";


type CategoriaType = {
    idCategoria: number;
    nomeCategoria: string;
    nomeImagem: string;
}

const Card = ({route, navigation }) => {
    const {usuario} = useContext(AutenticacaoContext);
    console.log('Usuario: ' + JSON.stringify(usuario));
    const [categoria, setCategoria] = useState<CategoriaType[]>([]);

    useEffect(() => {
        getDadosCategoria();
    }, []);

    const getDadosCategoria = async () => {
        AxiosInstance.get(
            `/categoria`,
            { headers: { "Authorization": `Bearer ${usuario.token}` } }
        ).then(result => {
            console.log('Dados das catagorias: ' + JSON.stringify(result.data));
            setCategoria(result.data);
        }).catch((error) => {
            console.log("Erro ao carregar a lista de categorias - " + JSON.stringify(error));
        });
    }

    return (
        <ScrollView style={styles.container}>
            <ScrollView style={styles.box} horizontal={true}>
                {categoria.map((k, i) => ( //key, indice
                        <TouchableOpacity key={i}
                            onPress={() => console.log(`Categoria ${k.nomeCategoria} foi pressionada`)}
                            style={styles.button}
                        >
                            <View style={styles.itens}>
                                <Text style={styles.title} >{k.nomeCategoria}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
            </ScrollView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
    },
    box: {
        flexGrow: 0,
    },
    itens: {
        width: 100,
        height: 100,
        backgroundColor: '#7d81d8',
        alignContent: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: 'center',
        padding: 10
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    }
});


export default Card;