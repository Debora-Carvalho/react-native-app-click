import React, { useState } from 'react';
import { ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../routes/routes';

type LoginScreenProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

import { styles } from './LoginScreenStyles';

import imgBackgroundLogin from '../../../assets/images/background-login.png';
import imgLogoClick from '../../../assets/images/logotipo-click.png';
import { Button } from '../../components/Button/Button';
import { FormLogin } from '../../components/FormLogin/FormLogin';
import { DialogModal } from '../../components/DialogModal/DialogModal';

export function Login() {
    const navigation = useNavigation<LoginScreenProp>();
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <ImageBackground
            source={imgBackgroundLogin}
            style={styles.container}
            resizeMode="cover"
        >

            <View style={styles.containerContent}>
                <FormLogin />

                <View style={styles.blockButton}>
                    <Button content='Entrar' onPress={() => setModalVisible(true)} />
                </View>

                {/* Modal de sucesso */}
                <DialogModal
                    visible={modalVisible}
                    title='Login'
                    message="Seu perfil foi confirmado com sucesso, clique abaixo para ir para a página inicial."
                    contentButton='Ir para Página Inicial'
                    onClose={() => navigation.navigate('Welcome')}
                />

                <View style={styles.containerLink}>
                    <Text style={styles.textLink}>Ainda não tem uma conta? </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SelectProfile')}
                    >
                        <Text style={[styles.textLink, styles.link]}>Cadastre-se</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <StatusBar style="light" />
        </ImageBackground>
    );
}