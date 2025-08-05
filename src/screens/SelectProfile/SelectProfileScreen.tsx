import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../routes/routes';

type SelectProfileScreenProp = NativeStackNavigationProp<RootStackParamList, 'SelectProfile'>;

import { styles } from './SelectProfileScreenStyles';
import imgLogoClick from '../../../assets/images/logotipo-click.png';
import imgProfilePhotographer from '../../../assets/images/profile-photographer-register.png'
import imgProfileClient from '../../../assets/images/profile-client-register.png';

export function SelectProfile() {
    const navigation = useNavigation<SelectProfileScreenProp>();

  return (
    <View style={styles.container}>
        <View style={styles.containerHeader}>
            <Image 
                source={imgLogoClick}
                style={styles.imageLogo}
            />
            <Text style={styles.textSimple}>Selecione um perfil para se cadastrar</Text>
        </View>

        <TouchableOpacity 
            style={styles.containerProfile}
            onPress={() => navigation.navigate('RegisterPhotographer')}
        >
            <Image 
                source={imgProfilePhotographer}
                style={styles.imagePhotographer}
            />
            <Text style={styles.textProfile}>Fotógrafo</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            style={styles.containerProfile}
            onPress={() => navigation.navigate('RegisterClient')}
        >
            <Text style={styles.textProfile}>Cliente</Text>
            <Image 
                source={imgProfileClient}
                style={styles.imageClient}
            />
        </TouchableOpacity>

        <View style={styles.containerLink}>
            <Text style={styles.textLink}>Já tem uma conta? Ir para </Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={[styles.textLink, styles.link]}>Login</Text>
            </TouchableOpacity> 
        </View>
    </View>
  );
}