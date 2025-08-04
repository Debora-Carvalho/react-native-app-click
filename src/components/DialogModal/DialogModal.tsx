import React from 'react';
import { Modal, View, Text, TouchableWithoutFeedback } from 'react-native';

import { styles } from './DialogModalStyles';
import { Button } from '../../components/Button/Button';

type DialogModalProps = {
    visible: boolean;
    title: string;
    message: string;
    contentButton: string;
    onClose: () => void;
};

export function DialogModal({ visible, title, message, contentButton, onClose }: DialogModalProps) {
    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
        >
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.overlay}>
                    <TouchableWithoutFeedback>
                        <View style={styles.modalContent}>
                            <Text style={styles.title}>
                                {title}
                            </Text>
                            
                            <Text style={styles.text}>
                                {message}
                            </Text>

                            <Button content={contentButton} onPress={onClose} />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
}