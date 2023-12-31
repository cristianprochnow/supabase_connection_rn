import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import Input from '../../components/Input';
import Title from '../../components/Title';

const Tasks: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Title>Cadastro de Tarefas</Title>

        <Input label="Nome" />
        <Input label="E-mail" placeholder="exemplo@dominio.com.br" />

        <Title>Tarefas Cadastradas</Title>
      </View>
    </View>
  );
};

export default Tasks;
