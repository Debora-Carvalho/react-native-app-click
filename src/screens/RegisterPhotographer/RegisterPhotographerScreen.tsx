import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from './RegisterPhotographerScreenStyles';
import { Button } from '../../components/Button/Button';

export function RegisterPhotographer() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [secure, setSecure] = useState(true);
    
    return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Cadastro
        </Text>

        <Text style={styles.textSimple}>
            Preencha os campos e se cadastre como 
            <Text> 
                profissional de fotografia
            </Text>
        </Text>

        <View>
            <View style={styles.containerInput}>
                <Text style={styles.label}>
                    Nome completo
                </Text>
                
                <TextInput
                    style={styles.input}
                    keyboardType="email-address"
                    value={name}
                    onChangeText={setName}
                />
            </View>

            <View style={styles.containerInput}>
                <Text style={styles.label}>
                    E-mail
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
                    Telefone (WhatsApp)
                </Text>
                
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={number}
                    onChangeText={setNumber}
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
                            color="#FFFFFF"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>

        <View style={styles.blockButton}>
            <Button content='Cadastrar'onPress={() => alert('Botão clicado!')}/>
        </View>

        <View style={styles.containerLink}>
            <Text style={styles.textLink}>Já tem uma conta? Ir para </Text>
            <TouchableOpacity>
                <Text style={[styles.textLink, styles.link]}>Login</Text>
            </TouchableOpacity> 
        </View>

    </View>
    );
}