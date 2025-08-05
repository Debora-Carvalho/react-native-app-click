import React from 'react';
import { ImageBackground, View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../routes/routes';

type WelcomeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;

import { styles } from './WelcomeScreenStyles';

import imgBackgroundWelcome from '../../../assets/images/background-welcome.png';
import imgLogoClick from '../../../assets/images/logotipo-click.png';
import { Button } from '../../components/Button/Button';

export function Welcome() {
    const navigation = useNavigation<WelcomeScreenProp>();

    return (
        <ImageBackground
            source={imgBackgroundWelcome}
            style={styles.container}
            resizeMode="cover"
        >
            <View style={styles.containerContent}>
                <Image
                    source={imgLogoClick}
                    style={styles.imageLogo}
                />
                <Text style={styles.title}>A pessoa certa para a recordação perfeita</Text>
                <Text style={styles.subtitle}>Comece agora mesmo, clicando abaixo</Text>

                <View style={styles.blockButton}>
                    <Button content='Começar' onPress={() => navigation.navigate('SelectProfile')} />
                </View>
            </View>
        </ImageBackground>
    );
}