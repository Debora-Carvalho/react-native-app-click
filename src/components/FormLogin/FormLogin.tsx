import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import { Feather } from '@expo/vector-icons';

import { styles } from './FormLoginStyles';

export function FormLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secure, setSecure] = useState(true);
    
    return (
        <BlurView intensity={85} tint="dark" style={styles.container}>
            <View style={styles.containerInput}>
                <Text style={styles.label}>
                    Login (E-mail)
                </Text>
                
                <TextInput
                    style={styles.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View style={styles.containerInput}>
                <Text style={styles.label}>
                    Senha
                </Text>
                
                <View style={[styles.input, styles.inputPassword]}>
                    <TextInput
                        secureTextEntry={secure}
                        value={password}
                        onChangeText={setPassword}
                    />

                    <TouchableOpacity onPress={() => setSecure(!secure)}>
                        <Feather
                            name={secure ? 'eye-off' : 'eye'}
                            size={20}
                            color="#ccc"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </BlurView>
    );
}