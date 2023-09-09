import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import Routes from './src/Routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default App;
