import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './ButtonStyles';

type ButtonProps = {
  content: string;
};

export function Button({content}: ButtonProps) {
  return (
    <View style={styles.containerButton}>
        <Text style={styles.textButton}>{content}</Text>
    </View>
  );
}