import React from 'react';
import { Button, Text, View } from 'react-native';
import { useLinkTo } from '@react-navigation/native';

import styles from './styles';

const Home: React.FC = () => {
  const linkTo = useLinkTo();

  return (
    <View style={styles.container}>
      <View style={styles.headingWrapper}>
        <Text style={styles.headingText}>Bem-vindo(a)! 👋</Text>
      </View>

      <View style={styles.buttonsWrapper}>
        <Button title="Colaboradores" onPress={onPressedColaborators} />
        <Button title="Tarefas" onPress={onPressedTask} />
      </View>
    </View>
  );

  function onPressedTask() {
    linkTo('/Tasks');
  }

  function onPressedColaborators() {
    linkTo('/Colaborators');
  }
};

export default Home;
