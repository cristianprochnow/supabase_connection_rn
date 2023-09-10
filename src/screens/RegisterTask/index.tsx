import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import Input from '../../components/Input';

const RegisterTask: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Input label="E-mail" placeholder="exemplo@dominio.com.br" />
      </View>
    </View>
  );
};

export default RegisterTask;
