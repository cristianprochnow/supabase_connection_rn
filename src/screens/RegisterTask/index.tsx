import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import Input from '../../components/Input';
import Title from '../../components/Title';

const RegisterTask: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Title>Cadastro de Tarefas</Title>

        <Input label="E-mail" placeholder="exemplo@dominio.com.br" />
      </View>
    </View>
  );
};

export default RegisterTask;
