import 'react-native-gesture-handler';
import React from 'react';
import Root from './routes';
import { AutenticacaoProvider } from './context/autenticacaoContext';

export default () => {
  return (
    <AutenticacaoProvider>
      <Root />
    </AutenticacaoProvider>
  );
};
