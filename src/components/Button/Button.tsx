import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { styles } from './ButtonStyles';

type ButtonProps = {
  content: string;
  onPress?: () => void;
};

export function Button({content, onPress}: ButtonProps) {
  return (
    <TouchableOpacity 
        style={styles.containerButton} 
        onPress={onPress}
    >
        <Text style={styles.textButton}>{content}</Text>
    </TouchableOpacity>
  );
}