import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';

import { styles } from './SelectProfileScreenStyles';
import imgLogoClick from '../../../assets/images/logotipo-click.png';
import imgProfilePhotographer from '../../../assets/images/profile-photographer-register.png'
import imgProfileClient from '../../../assets/images/profile-client-register.png';

export function SelectProfile() {
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
            onPress={() => Alert.alert('Cadastro', 'perfil fotografo')}
        >
            <Image 
                source={imgProfilePhotographer}
                style={styles.imagePhotographer}
            />
            <Text style={styles.textProfile}>Fotógrafo</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            style={styles.containerProfile}
            onPress={() => Alert.alert('Cadastro', 'perfil cliente')}
        >
            <Text style={styles.textProfile}>Cliente</Text>
            <Image 
                source={imgProfileClient}
                style={styles.imageClient}
            />
        </TouchableOpacity>
    </View>
  );
}