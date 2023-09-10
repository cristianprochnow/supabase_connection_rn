import React from 'react';
import { Text, TextInput, View } from 'react-native';

import styles from './styles';

type InputProps = {
  label: string;
  placeholder: string;
};

const Input: React.FC<InputProps> = ({ label, placeholder }: InputProps) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default Input;
