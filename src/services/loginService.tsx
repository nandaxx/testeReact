import React from "react";
import axiosInstance  from "../api/axios";
import jwt_decode from "jwt-decode";

const LoginService = async (email:string , senha:string) => {
    console.log(`Email : ${email} - Senha : ${senha}`);

    var tokenDecodificado:any = null;

    try{
        const resposta = await axiosInstance.post('autenticacao',{
            email,
            senha
        });

        if(resposta.status === 200){
            console.log('Reposta do LoginService:' + JSON.stringify(resposta.data));
            tokenDecodificado = jwt_decode(resposta.data.token);
            tokenDecodificado['token'] =resposta.data.token;
            return tokenDecodificado;
        }else{
            return false;
        }

    }catch(error){
        console.log(`Erro ao realizar o login:` + JSON.stringify(error));
        return false;
    }   
}

export {LoginService};