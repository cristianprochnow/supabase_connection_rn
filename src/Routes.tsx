import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import RegisterTask from './screens/RegisterTask';

const { Navigator, Screen } = createNativeStackNavigator();

const Routes: React.FC = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} options={{ title: 'Início' }} />
      <Screen
        name="RegisterTask"
        component={RegisterTask}
        options={{ title: 'Cadastrar Tarefa' }}
      />
    </Navigator>
  );
};

export default Routes;
