import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../routes/routes';

type RegisterClientScreenProp = NativeStackNavigationProp<RootStackParamList, 'RegisterClient'>;

import { styles } from './RegisterClientScreenStyles';
import { Button } from '../../components/Button/Button';
import { DialogModal } from '../../components/DialogModal/DialogModal';

export function RegisterClient() {
    const navigation = useNavigation<RegisterClientScreenProp>();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [secure, setSecure] = useState(true);
    const [isChecked, setChecked] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const [errorModalVisible, setErrorModalVisible] = useState(false);
    const [errorTitle, setErrorTitle] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    function handleRegister() {
        if (!name || !email || !number || !password) {
            setErrorTitle('⚠️ Campos obrigatórios');
            setErrorMessage('Por favor, preencha todos os campos.');
            setErrorModalVisible(true);
            return;
        }

        if (!isChecked) {
            setErrorTitle('⚠️ Termos não aceitos');
            setErrorMessage('Você precisa aceitar os termos para continuar.');
            setErrorModalVisible(true);
            return;
        }

        // quando tudo estiver ok, exibe o modal
        setModalVisible(true);
    }
    
    return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Cadastro
        </Text>

        <Text style={styles.textSimple}>
            Preencha os campos e se cadastre como 
            <Text style={styles.textBold}> 
                cliente
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

            <View style={styles.checkboxContainer}>
                <Checkbox
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? '#E24939' : undefined}
                />
                <Text style={styles.checkboxLabel}>
                    Aceito receber notificações e mensagens por e-mail e Whatsapp
                </Text>
            </View>
        </View>

        <View style={styles.blockButton}>
            <Button content='Cadastrar' onPress={handleRegister}/>
        </View>

        {/* Modal de sucesso */}
        <DialogModal
            visible={modalVisible}
            title='Perfil cadastrado!'
            message="Seu perfil foi cadastrado com sucesso, utilize seu email e senha para Login."
            contentButton='Ir para Login'
            onClose={() => navigation.navigate('Login')}
        />

        {/* Modal para erros */}
        <DialogModal
            visible={errorModalVisible}
            title={errorTitle}
            message={errorMessage}
            contentButton="Ok, entendi!"
            onClose={() => setErrorModalVisible(false)}
        />

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