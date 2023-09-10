import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Tasks from './screens/Tasks';
import Colaborators from './screens/Colaborators';

const { Navigator, Screen } = createNativeStackNavigator();

const Routes: React.FC = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} options={{ title: 'Início' }} />
      <Screen
        name="Colaborators"
        component={Colaborators}
        options={{ title: 'Colaboradores' }}
      />
      <Screen name="Tasks" component={Tasks} options={{ title: 'Tarefas' }} />
    </Navigator>
  );
};

export default Routes;
