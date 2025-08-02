import React from 'react';
import { ImageBackground, View, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { styles } from './LoginScreenStyles';

import imgBackgroundLogin from '../../../assets/images/background-login.png';
import imgLogoClick from '../../../assets/images/logotipo-click.png';
import { Button } from '../../components/Button/Button';
import { FormLogin } from '../../components/FormLogin/FormLogin';

export function Login() {
  return (
    <ImageBackground 
        source={imgBackgroundLogin}
        style={styles.container}
        resizeMode="cover"
    >   

        <View style={styles.containerContent}>
            <FormLogin />

            <View style={styles.blockButton}>
                <Button content='Entrar'onPress={() => alert('Botão clicado!')}/>
            </View>

            <Text style={styles.subtitle}>Ainda não tem uma conta? Cadastre-se</Text>
        </View>
        
        <StatusBar style="light" />
    </ImageBackground>
  );
}