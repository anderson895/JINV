import React from 'react';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import LoginScreen from './LoginScreen';

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <LoginScreen />
    </ApplicationProvider>
  );
}
