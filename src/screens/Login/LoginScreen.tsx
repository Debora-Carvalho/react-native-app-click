import React from 'react';
import { ImageBackground, View, Text } from 'react-native';

import { styles } from './LoginScreenStyles';

import imgBackgroundWelcome from '../../../assets/images/background-login.png';

export function Login() {
  return (
    <ImageBackground 
        source={imgBackgroundWelcome}
        style={styles.container}
        resizeMode="cover"
    >
        <View>
          <Text>Olá</Text>
        </View>
    </ImageBackground>
  );
}