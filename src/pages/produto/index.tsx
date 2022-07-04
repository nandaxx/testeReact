import React, {useContext} from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { CarrinhoContext } from "../../context/carrinhoContext";

const Produto = (/*{route, navigation}*/) => {
 /*   const {id_produto,sku,nome, descricao_produto, imagem_produto, preco_produto} = route.params;
    const {adicionarProduto} = useContext(CarrinhoContext);

    _sku: string, _nome: string, _descricao: string,
        _preco: number, _imagem: string
         */

   /* const handleAddProduto = () => {
        adicionarProduto(id_produto,sku,nome, descricao_produto, imagem_produto, preco_produto)
    } */

    return(
        <View style={styles.container}>
            <View style={styles.container_imagem}>
                <Text>Imagem</Text>
            </View>
            <View style={styles.container_produto}>
                <Text>{}</Text>
                <Text>{}</Text>
            <TouchableOpacity /*onPress={() => handleAddProduto()}*/>
            <Text>COMPRAR</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>FAVORITAR</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#bbcdf2',
        padding: 16,
        alignItems: 'stretch',
        justifyContent: 'space-between',
        flexDirection:'row',
    },
    container_imagem:{
        width: '50%',
    },
    container_produto:{
        width: '50%',
    }
})

export default Produto;